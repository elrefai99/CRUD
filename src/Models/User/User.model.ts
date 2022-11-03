import { prop, getModelForClass } from '@typegoose/typegoose';

// Schema
class User{
    @prop({
        type: String, 
        required: true
    })
    first_name: string;

    @prop({
        type: String, 
        required: true
    })
    last_name: string;

    @prop({
        type: String, 
        required: true
    })
    username: string;
    
    @prop({
        type: String, 
        required: true
    })
    email: string;

    @prop({
        type: String, 
        required: true
    })
    password: string;

    @prop({
        type: String, 
        default: "https://res.cloudinary.com/ebi-999/image/upload/v1656812197/user_rasdwh.jpg"
    })
    profilePicture: string;

    @prop({
        type: String, 
        default: ""
    })
    coverPicture: string;

    @prop({
        type: String, 
        default: []
    })
    followers: Array<string>;

    @prop({
        type: String, 
        default: []
    })
    followings: Array<string>;

    @prop()
    token: string;

}

const UserModel = getModelForClass(User,  { schemaOptions: { timestamps: true } });
export default UserModel;