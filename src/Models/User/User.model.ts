import {prop, Ref, getModelForClass} from '@typegoose/typegoose';
import mongoose from 'mongoose';


class Adderss {
    @prop({required: true})
    street: string;

    @prop({required: true})
    city: string;

    @prop({required: true})
    country: string;
}

export class User{
    @prop({required: true})
    public firstName: string;

    @prop({required: true})
    public lastName: string;

    @prop({required: true})
    public username: string;

    @prop({required: true})
    public email: string;

    @prop()
    public password: string;

    @prop({ default: "https://firebasestorage.googleapis.com/v0/b/animeview-60d78.appspot.com/o/user.jpeg?alt=media&token=2b11e16f-41a6-435d-afdc-f7f68615d2f7"})
    public profilePic: string;

    @prop({ default: ""})
    public coverPic: string;

    @prop({type: mongoose.Schema.Types.String,  default: [""]})
    public followers: Array<string>;

    @prop({type:  mongoose.Schema.Types.String, default: [""]})
    public followings: Array<string>;

    @prop()
    public desc: string;

    @prop({type: () => [Adderss]})
    public address?: Ref<Adderss>

    @prop({type: String})
    public token: string;
}

export const UserModel = getModelForClass(User, { schemaOptions: { timestamps: true } })