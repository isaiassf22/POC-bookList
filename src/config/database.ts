import { PrismaClient } from '@prisma/client'

import pg from 'pg'

const prisma = new PrismaClient()
const {Pool}= pg

const database = new Pool({
host: 'localhost',
port: 5432,
user: 'postgres',
password: 'caneta',
database: 'test02'
})

export {database};