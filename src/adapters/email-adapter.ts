import nodemailer from 'nodemailer'

export const emailAdapter = {
   async sendEmail(email: string, subject: string, message: string){
        let transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: "zadkovars@gmail.com",
              pass: "vzgz nqgp ekfk buvv ",
            },
          })
          
        let info = await transport.sendMail({
              from: 'tester',
              to: email,
              subject: subject,
              html: message,
            })    
       return info
    }
}