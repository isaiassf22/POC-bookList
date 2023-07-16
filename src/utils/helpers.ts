import { number } from "joi"

function isValidId (id : number): boolean{
return true
}

 type BookEntity ={
    id:       number,
  id_user:    number,
  token_id:   number,
  name:       string,
  number:     string,
  state:      string,
  city?:       string,
  cep?:        string
}

type createBook = Omit<BookEntity, "id" | "id_user" | "token_id">

export { isValidId, BookEntity,createBook}