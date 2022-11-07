import { Request } from "express";

interface Address {
    street: string;
    city: string;
    country: string;
}

export interface User{
    firstName?: string;
    lastName?: string;
    username?: string;
    email?: string;
    password?: string;
    profilePic?: string;
    coverPic?: string;
    followers?: string;
    followings?: string;
    desc?: string;
    address?: Address;
    token?: string;
}

export interface RequestUser extends Request{
    user: User;
}