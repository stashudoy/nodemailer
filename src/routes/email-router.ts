import {Router, Request, Response} from 'express'
import nodemailer from 'nodemailer'


export const emailRouter = Router({})

emailRouter
    .post('/send', async (req: Request, res: Response) => {

        let transport = nodemailer.createTransport({
            service: 'gmail',
            // host: 'smtp.gmail.com',
            // port: 587,
            // secure: false, // true for 465, false for other ports
            auth: {
              user: "zadkovars@gmail.com",
              pass: "",
            },
          })

          
        let info = await transport.sendMail({
              from: 'tester',
              to: req.body.email,
              subject: req.body.subject,
             // text: "Hello world?", // plain‑text body  // для старых неподдерживаемых html
              html: req.body.message,
            })
          
            



        res.send({
            "email":req.body.email,
            "message": req.body.message,
            "subject": req.body.subject
        })

})