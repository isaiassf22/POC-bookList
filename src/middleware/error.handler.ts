import { invalidBody,userExists,userNotFound,deniedAcess } from "@/errors/erros.middlaware"
import httpStatus from "http-status"
import { Request, Response, NextFunction} from "express"


export function errorHandling(error: any,req:Request,res:Response,next:NextFunction){
    console.log(error)

    if(error.type==="invalidSintax"){
        return res.status(httpStatus.NOT_FOUND).send(error.message)
    }

    if(error.type==="userExists"){
        return res.status(httpStatus.NOT_FOUND).send(error.message)
    }

    if(error.type==="userNotFound"){
        return res.status(httpStatus.NOT_FOUND).send(error.message)
    }

    if(error.type==="Unathorized"){
        return res.status(httpStatus.NOT_FOUND).send(error.message)
    }

    next()
}