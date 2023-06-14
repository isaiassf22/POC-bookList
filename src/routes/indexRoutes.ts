import { Router } from "express";
import { Request,Response } from "express";
import repositories from "../repositories/repositories.js";

const router = Router()

router.get('/check/:id',(req: Request, res: Response)=>{
    const {id}=req.params
    res.send(id)
})

router.post('/costumers',repositories.addCostumers)
router.get('/costumers',repositories.getCostumers)



export default router

