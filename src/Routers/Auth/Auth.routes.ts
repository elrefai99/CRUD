import { Router } from "express";
import {RegisterController} from '../../Controller/Auth/Auth.Module'
const router = Router();

// Register 
router.post('/register', RegisterController)

export default router;