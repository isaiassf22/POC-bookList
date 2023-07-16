import { userNotFound } from "@/errors/erros.middlaware";
import bookRepository from "@/repositories/bookRepository";
import { createBook } from "@/utils/helpers";

async function getAll() {
    return await bookRepository.getAll()
}

async function getById(id: number) {
       const book = await bookRepository.getById(id)
       if(!book) throw userNotFound()
       return book
}

async function create(data:createBook) {
     return await bookRepository.create(data)
}

async function updateBook(id:number, data:createBook) {
      return await bookRepository.update(id,data)
}

async function deleteBook(id: number) {
   return await bookRepository.deleteBook(id)
}



export default{getAll,getById,create,updateBook,deleteBook}