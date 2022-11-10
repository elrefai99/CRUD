import {prop, getModelForClass} from '@typegoose/typegoose';

export class Post{

}

export const PostModel = getModelForClass(Post, {
    schemaOptions: {
        timestamps: true
    }
});