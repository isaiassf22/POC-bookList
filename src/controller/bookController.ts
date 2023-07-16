import { Request, Response } from "express";
import bookService from "@/service/bookService";
import { number } from "joi";
import { isValidId,createBook } from "@/utils/helpers";
import { BAD_REQUEST } from "http-status";
import { invalidBody } from "@/errors/erros.middlaware";


async function getAll(req:Request,res:Response) {
    const bookList = await bookService.getAll()
    res.send(bookList)
}

async function getById(req:Request,res:Response) {
    const id = Number(req.params.id)
    if(!isValidId(id)) throw invalidBody()
    const bookById = await bookService.getById(id)
    res.send(bookById)   
}

async function create(req:Request,res:Response) {
    const newResgister: createBook = req.body
     await  bookService.create(newResgister)
    res.status(201).send('created!')   
}

async function updateBook(req:Request,res:Response) {
    const id = Number(req.params.id)
    const updatedBook: createBook = req.body
    const updateBook = await bookService.updateBook(id,updatedBook)
    res.send(updateBook)   
}

async function deleteBook(req:Request,res:Response) {
    const id = Number(req.params.id)
    const bookById = await bookService.deleteBook(id)
    res.send(bookById)   
}

export default{getAll,getById,create,updateBook,deleteBook}