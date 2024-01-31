const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'eatwise.nutrition@gmail.com',
        pass: 'krwlyeeumuqvpsfb'
    }
});

function sendEmail(to: string, subject: string, body: string) {
    console.log("in nodeMailer.ts in sendMail");
    console.log("to: "+to+" sub: "+subject)
    const mailOptions = {
        from: 'eatwise.nutrition@gmail.com',
        to: to,
        subject: subject,
        text: body,
        // attachments: [
        //     {
        //         filename: 'example.pdf',
        //         path: 'example.pdf'
        //     }
        // ]

    };

    return transporter.sendMail(mailOptions);
}

module.exports = {
    sendEmail
};
