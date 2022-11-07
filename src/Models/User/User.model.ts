import {prop, modelOptions, Ref, getModelForClass} from '@typegoose/typegoose';

modelOptions({
    schemaOptions: {
        timestamps: true,
    }
})

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

    @prop({ required: true, default: "https://firebasestorage.googleapis.com/v0/b/animeview-60d78.appspot.com/o/user.jpeg?alt=media&token=2b11e16f-41a6-435d-afdc-f7f68615d2f7"})
    public profilePic: string;

    @prop({required: true, default: ""})
    public coverPic: string;

    @prop({type: Array, default: []})
    public followers: Array<string>;

    @prop({type: Array, default: []})
    public followings: Array<string>;

    @prop({type: String, max: 120})
    public desc: string;

    @prop({ref: () => Adderss})
    public address: Ref<Adderss>

    @prop({type: String})
    public token: string;
}

export const UserModel = getModelForClass(User)