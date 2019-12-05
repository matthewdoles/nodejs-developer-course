const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'matthew@doles.com',
        subject: 'Thanks for joining!',
        text: `Hi ${name}, welcome to the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'matthew@doles.com',
        subject: 'sorry to see you go.',
        text: `Hey ${name}, was there anything we could have done better?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}