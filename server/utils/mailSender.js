const nodemailer = require('nodemailer');

const mailSender = async (email, title, body) => {
    try {
        // Create a transporter to send emails
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        let info = await transporter.sendMail({
            from: "Study-Vault",
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        });
        console.log(info);
        return info; 
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

module.exports = mailSender;    