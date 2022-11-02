import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

// timestamps
modelOptions({
    schemaOptions:{
        timestamps: true
    }
})

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
    usernamename: string;
    
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
}

const UserModel = getModelForClass(User);
export default UserModel;