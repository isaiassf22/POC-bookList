import { Router } from "express";
import router from "./indexRoutes";
import authController from "@/controller/authController";

const AuthRoute = Router()



AuthRoute.post("/signUp",authController.signUp)
AuthRoute.get("/signIn",authController.singIn)

export default AuthRoute