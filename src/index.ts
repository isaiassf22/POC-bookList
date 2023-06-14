import express from 'express'
import router from './routes/indexRoutes.js'




const app = express()

app.use(express.json())
app.use(router)


app.listen(4003, ()=>{
    console.log("esta funcionando!")
})
