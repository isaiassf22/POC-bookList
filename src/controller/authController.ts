import { signIn } from "@/models/authModels";
import authRepository from "@/repositories/authRepository";
import authService from "@/service/authService"
import { Request,Response } from "express"
import httpStatus from "http-status";

async function signUp(req: Request, res: Response) {
    const user =req.body
    const create = await authService.signup(user)

   return res.sendStatus(httpStatus.CREATED)
}


async function singIn(req: Request, res: Response) {
    const user: signIn= req.body
    const login = await authService.singin(user)
    console.log(login)
    
    
  
    res.sendStatus(httpStatus.OK)
}


export default{
    signUp,
    singIn
}