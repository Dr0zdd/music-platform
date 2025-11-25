import {
    Controller,
    Get,
    Param,
    NotFoundException,
    StreamableFile,
    InternalServerErrorException,
    Res,
} from '@nestjs/common';
import {createReadStream, existsSync, readdirSync} from 'fs';
import {join} from 'path';
import type {Response} from 'express';
import * as mime from 'mime-types';

@Controller()
export class FileController {
    @Get('image/:id')
    getImage(@Param('id') id: string, @Res({passthrough: true}) res: Response): StreamableFile {
        return this.getFileById('image', id, res);
    }

    @Get('audio/:id')
    getAudio(@Param('id') id: string, @Res({passthrough: true}) res: Response): StreamableFile {
        return this.getFileById('audio', id, res);
    }

    private getFileById(type: 'image' | 'audio', id: string, res: Response): StreamableFile {
        try {
            const folderPath = join(__dirname, '..', 'static', type);
            const files = readdirSync(folderPath);
            const matchedFile = files.find((file) => file.startsWith(id));
            if (!matchedFile) {
                throw new NotFoundException('Файл не найден');
            }

            const filePath = join(folderPath, matchedFile);
            const mimeType = mime.lookup(filePath) || 'application/octet-stream';
            res.setHeader('Content-Type', mimeType);

            const stream = createReadStream(filePath);
            return new StreamableFile(stream);
        } catch (error) {
            console.error('Ошибка при отдаче файла:', error);
            throw new InternalServerErrorException('Ошибка сервера');
        }
    }
}
