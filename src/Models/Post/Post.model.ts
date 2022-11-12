import {prop, getModelForClass} from '@typegoose/typegoose';
import mongoose from 'mongoose';

export class Post{
    @prop({required: true})
    userId: string;

    @prop({required: true})
    desc: string

    @prop({required: true})
    img:string
    
    @prop({type: mongoose.Schema.Types.String,  default: []})
    likes: Array<number>

}

export const PostModel = getModelForClass(Post, {
    schemaOptions: {
        timestamps: true
    }
});