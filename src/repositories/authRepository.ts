import { signIn, signUp } from "@/models/authModels";
import prisma from "@/config/database";
import { deniedAcess, userNotFound } from "@/errors/erros.middlaware";

async function createUser(user: signUp) {
    console.log('3')
    await prisma.customers.create({
        data: {
            user: user.user,
            email: user.email,
            password: user.password
        }
    })
    console.log('3')
}

async function login(user: signIn) {
    const password = user.password
    const check = await prisma.customers.findFirst({
        where: {
            user: user.user
        }

    })
    if (!check || check.password !== password) throw userNotFound()

    const token = `xxx${check.id}`
    const gerateToken = await prisma.token_list.create({
        data: {
            id_user:check.id,
            token
        }
    })
    if (!gerateToken) throw deniedAcess()
    console.log(gerateToken)
    return check
}




export default { createUser, login, }