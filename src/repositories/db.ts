import { MongoClient } from 'mongodb'

export const runDB  =  async () => {
    const uri = process.env.URI || "mongodb://localhost:27017"
    const client = new MongoClient(uri);

    const db = client.db("nodemailer");
    try {
    
        await client.connect()
        console.log("Mongodb run susseccfuly!")
        
    } catch (err) {
        console.log(err)
       
    }  

}