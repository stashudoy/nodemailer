import {Router, Request, Response} from 'express'
import nodemailer from 'nodemailer'
import { emailAdapter } from '../adapters/email-adapter'
import { businessService } from '../domain/business-service'


export const emailRouter = Router({})

emailRouter
    .post('/send', async (req: Request, res: Response) => {

        await emailAdapter.sendEmail(req.body.email, req.body.subject, req.body.message)

       // await businessService.do()

        res.send({
            "email": req.body.email,
            "message": req.body.message,
            "subject": req.body.subject
        })



})