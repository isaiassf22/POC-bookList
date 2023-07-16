import { createBook } from "@/utils/helpers"
import prisma from "@/config/database"


async function getAll() {
    return await prisma.customer_informations.findMany()

}

async function getById(id: number) {
    return await prisma.customer_informations.findFirst({
        where: { id }
    }
    )
}

async function create(data: createBook) {
    let countId = 1
    const creating = await prisma.customer_informations.create({
        data: {
            id_user: countId,
            token_id: countId,
            name: data.name,
            number: data.number,
            state: data.state,
            city: data.city,
            cep: data.cep
        }
    })
    if (creating) {
        console.log("criou bb")
        countId++
    }
}

async function update(id: number, data: createBook) {
    let countId = 5
    const updating= await prisma.customer_informations.update({
        where: {
            id
        },
        data: {
            id_user: countId,
            token_id: countId,
            name: data.name,
            number: data.number,
            state: data.state,
            city: data.city,
            cep: data.cep
        }
    })
    if (updating) {
        console.log("atualizou bb")
        countId++
    }
    return updating
}

async function deleteBook(id: number) {
    return await prisma.customer_informations.delete({
        where: {id}
    })
}




export default { getAll, getById, create, update, deleteBook }