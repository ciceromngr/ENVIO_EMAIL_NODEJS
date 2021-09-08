import nodemailer from 'nodemailer'

export interface ISenderEmailRequest {
    from: string,
    to: string,
    subject: string,
    text: string
}

async function handle({ from, to, subject, text }: ISenderEmailRequest) {

    let testeEmail = await nodemailer.createTestAccount()

    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email', // smtp.gmail.com
        port: 587, // 465 port do email
        secure: false, // no caso como é uma conta faker deixe falso caso for usar o email bote como true
        auth: {
            user: testeEmail.user, // email@email.com
            pass: testeEmail.pass // senha , Ative O acesso a apps menos seguros
        }
    })

    let information = await transporter.sendMail({
        from,
        to,
        subject,
        text,
    })
    
    return {
        info: information,
        acessEmailTest: nodemailer.getTestMessageUrl(information)
    }

}

export { handle }