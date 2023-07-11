 import { signIn, signUp } from "@/models/authModels";
import prisma from "@/config/database";
import { string } from "joi";
import { userExists, userNotFound } from "@/errors/erros.middlaware";
import authRepository from "@/repositories/authRepository";

 async function signup(user: signUp){
    console.log(user.email)
    const userVerify = await prisma.customers.findFirst({
        where:{
            email:user.email
        }
    })
    if (userVerify) throw userExists()
    return await authRepository.createUser(user)
 


 }
 async function singin(user: signIn) {
    
    const check = await authRepository.login(user)
    return check
 }


 export default { singin,signup}