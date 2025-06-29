import nodemailer from 'nodemailer'
import { emailAdapter } from '../adapters/email-adapter'
import { emailManager } from '../managers/email-manager'

export const businessService = {
   async doOperation(){
     
       //save repo
       // get user from repo
        await emailManager.sendEmailRecoveryMessage({})  // чтоб разгрузить BLL перекинули  ф-ию в manager
    },
    async doOperation2(){
         
        //save repo
        // get user from repo
         await emailAdapter.sendEmail("user.email","password_recovery", "<div>message: your pass or link</div>")
 
         
     }
}