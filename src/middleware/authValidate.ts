import { signIn } from "@/models/authModels";
import { Request,Response,NextFunction } from "express";
import { invalidBody } from "../errors/erros.middlaware";
 
function schemaValidate(schema: any){

return(req:Request,res:Response,next:NextFunction)=>{
    const {error} = schema.validate(req.body, {abortEarly: false})
    if(error) throw invalidBody();
    next()
}


}

export default schemaValidate