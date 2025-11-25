import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model, Types} from "mongoose";
import {Track, TrackDocument} from "./schemas/track.schema";
import {Comment, CommentDocument} from "./schemas/comments.schema";
import {CreateTrackDto} from "./dto/create-track.dto";
import {CreateCommentDto} from "./dto/create-comment.dto";
import {FileService, FileType} from "../file/file.service";


@Injectable()
export class TrackService {

    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
                @InjectModel(Comment.name) private commentModal: Model<CommentDocument>,
                private fileService: FileService) {
    }

    async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
        const track = await this.trackModel.create({...dto, listens: 0, audio: audioPath, picture: picturePath})
        return track;
    }

    async getAll(count = 10, offset = 0): Promise<Track[]> {
        const tracks = await this.trackModel.find().skip(offset).limit(count);
        return tracks;
    }

    async getOne(id: Types.ObjectId): Promise<Track> {
        const track = await this.trackModel.findById(id).populate('comments');
        if (!track) {
            throw new HttpException(`Трек с id ${id} не найден`, HttpStatus.NOT_FOUND);
        }
        return track;
    }

    async delete(id: Types.ObjectId): Promise<Types.ObjectId> {
        const track = await this.trackModel.findByIdAndDelete(id);
        if (!track) {
            throw new HttpException(`Трек с id ${id} не найден`, HttpStatus.NOT_FOUND);
        }
        return track._id;
    }

    async addComment(dto: CreateCommentDto): Promise<Comment> {
        const track = await this.trackModel.findById(new Types.ObjectId(dto.trackId.toString()));
        if (!track) {
            throw new HttpException(`Трек с id ${dto.trackId} не найден`, HttpStatus.NOT_FOUND);
        }
        const comment = await this.commentModal.create({...dto})
        track.comments.push(comment._id)
        await track.save();
        return comment;
    }

    async listen(id: Types.ObjectId) {
        const track = await this.trackModel.findById(id);
        if (!track) {
            throw new HttpException(`Трек с id ${id} не найден`, HttpStatus.NOT_FOUND);
        }
        track.listens += 1;
        await track.save();
    }


    async search(query: string): Promise<Track[]> {
        const tracks = await this.trackModel.find({
            name: {$regex: new RegExp(query,'i')}
        })
        return tracks
    }
}