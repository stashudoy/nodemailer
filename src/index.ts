import express, {Request, Response} from 'express'
import { runDB } from './repositories/db'
import { emailRouter } from './routes/email-router'
import bodyParser from 'body-parser'
import cors from 'cors'



const PORT = process.env.PORT || 5000

const app = express()

const corsMiddleware = cors()
app.use(corsMiddleware)

const jsonBodyMiddleware = bodyParser.json()
app.use(jsonBodyMiddleware)




app.use('/email', emailRouter)


runDB()

app.listen(PORT, () => {
    console.log(`Server run on ${PORT}!`)   
})



