import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';
import {Track} from "./track.schema";
import * as mongoose from "mongoose";


export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
    // @Prop()
    // id: number;
    //
    // @Prop()
    // track_id: number;

    @Prop()
    username: string;

    @Prop()
    text: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Track'})
    track: Track
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
