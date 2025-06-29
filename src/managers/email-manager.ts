import { emailAdapter } from "../adapters/email-adapter"

export const emailManager = {
       async sendEmailRecoveryMessage(user: any){
         
           //save repo
           // get user from repo
            await emailAdapter.sendEmail("user.email","password_recovery", "<div>message: your pass or link</div>")
    
            
        }
}