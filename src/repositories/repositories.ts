import prisma from "@/config/database.js";
import { Request, Response } from "express";


async function addCostumers(req: Request, res: Response){
        const {name,phone} =req.body

   /* try{
        await database.query(`insert into costumers (name,phone) values ($1,$2)`,
        [name,phone])
        return res.status(201).send('created!')
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }*/

}

async function getCostumers(req: Request, res: Response){
   try{ 
     const users = await prisma.costumers.findMany()
        
    res.send({users})
} catch(err){
    res.sendStatus(500)
   }
}

export default{
    addCostumers,getCostumers
}