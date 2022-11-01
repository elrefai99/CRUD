import { Router } from "express";
import {res} from '../controller/res'
const router = Router();

router.post('/register', res)


export default router;