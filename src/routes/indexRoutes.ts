import { Router } from "express";
import { Request,Response } from "express";
import bookController from "@/controller/bookController";

const BookRouter = Router()

BookRouter.get('/book',bookController.getAll)
BookRouter.get("/book/:id",bookController.getById)
BookRouter.post("/book",bookController.create)
BookRouter.put("/book/:id",bookController.updateBook)
BookRouter.delete("/book/:id",bookController.deleteBook)




export default BookRouter

