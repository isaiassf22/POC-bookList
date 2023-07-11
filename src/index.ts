import express from 'express'
import 'express-async-errors'
import router from './routes/indexRoutes'
import AuthRoute from './routes/AuthRoute'
import { errorHandling } from './middleware/error.handler'
import BookRouter from './routes/indexRoutes'

const app = express()

app.use(express.json())
app.use(AuthRoute)
app.use(BookRouter)
app.use(errorHandling)


app.listen(4003, ()=>{
    console.log("app running in port 4003")
})
