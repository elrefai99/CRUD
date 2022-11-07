import { Router } from "express";

export interface ControllerInterFaces {
    path: string;
    router: Router;
}