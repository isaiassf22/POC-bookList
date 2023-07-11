import { Request, Response } from "express";
import bookService from "@/service/bookService";

async function getAll(req:Request,res:Response) {
    const bookList = await bookService.getAll()
    res.send(bookList)
}

async function getById(req:Request,res:Response) {
    const bookById =  bookService.getById()
    res.send(bookById)   
}

async function create(req:Request,res:Response) {
    const createBook =  bookService.createBook()
    res.send(createBook)   
}

async function updateBook(req:Request,res:Response) {
    const updateBook =  bookService.updateBook()
    res.send(updateBook)   
}

async function deleteBook(req:Request,res:Response) {
    const bookById =  bookService.deleteBook()
    res.send(bookById)   
}

export default{getAll,getById,create,updateBook,deleteBook}