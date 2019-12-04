const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = 'temp'

sgMail.setApiKey(sendgridAPIKey)
sgMail.send({
    to: 'matteddied@gmail.com',
    from: 'matteddied@gmail.com',
    subject: 'This is my first sendgrid email',
    text: 'I hope this gets to you.'
})