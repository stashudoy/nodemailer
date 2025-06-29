import express, {Request, Response} from 'express'
import { runDB } from './repositories/db'

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req: Request, res: Response) => {
    res.send("hello, tester!")
})



runDB()

app.listen(PORT, () => {
    console.log(`Server run on ${PORT}!`)   
})

