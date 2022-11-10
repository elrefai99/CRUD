import { UserModel } from "../Models/User/User.model";
import { Request, Response, NextFunction } from 'express';


export class UserController {

    //Get User
    public async getUserAccount (req: Request | any, res: Response, next: NextFunction) {
        try{
            const GetUser =  await UserModel.findById(req.user.id);
            res.status(200).json(GetUser)
            next()
        }catch(err){
            res.status(500).json({message: err})
        }
    }

    // Update User
    public async UpdateUserController (req: Request | any, res: Response, next: NextFunction){
        try{
            await UserModel.findByIdAndUpdate(req.user.id, {
                $set: req.body
            });
            res.status(200).json("Done...!")
            next()
        }catch(err){
            res.status(500).json({message: err})
        }
    }

    // Delete User
    public async DeleteUserController (req: Request | any, res: Response, next: NextFunction){
        try{
            await UserModel.findByIdAndDelete(req.user.id);
            res.status(200).json("Done...!")
            next()
        }catch(err){
            res.status(500).json({message: err})
        }
    }

    // following User
    public async FollowUserController(req: Request | any, res: Response, next: NextFunction){
        try{
            if(req.user.id != req.params.id){
                const user = await UserModel.findById(req.params.id);
                const followerID = await UserModel.findById(req.user.id)

                if(!user?.followers.includes(req.user.id)){
                    await user?.updateOne({
                        $push: {
                            followers: req.user.id
                        }
                    })
                    await followerID?.updateOne({
                        $push: {
                            followings: req.params.id
                        }
                    });
                    res.status(200).json({success: true, message: "Success Follow!"});
                }else{
                    res.status(403).json("you already follow this user");
                }
            }else{
                res.status(403).json("you cant follow yourself");
            }
            next()
        }catch(err){
            res.status(500).json({message: err})
        }
    }

    // Unfollowing User
    public async UnFollowUserController(req: Request | any, res: Response, next: NextFunction){
        try{
            if(req.user.id != req.params.id){
                const user = await UserModel.findById(req.params.id);
                const followerID = await UserModel.findById(req.user.id)

                if(user?.followers.includes(req.user.id)){
                    await user?.updateOne({
                        $pull: {
                            followers: req.user.id
                        }
                    })
                    await followerID?.updateOne({
                        $pull: {
                            followings: req.params.id
                        }
                    });
                    res.status(200).json({success: true, message: "Success Follow!"});
                }else{
                    res.status(403).json("you already follow this user");
                }
            }else{
                res.status(403).json("you cant follow yourself");
            }
            next()
        }catch(err){
            res.status(500).json({message: err})
        }
    }
}