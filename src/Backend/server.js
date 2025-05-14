const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

const allowedOrigins = ['http://localhost:4200', 'https://klimbimgmbh.de'];
app.use(cors({

	origin: function(origin, callback){
		// allow requests with no origin (like mobile apps or curl)
		if (!origin) return callback(null, true);
		if (allowedOrigins.includes(origin)) {
			return callback(null, true);
		} else {
			return callback(new Error('Not allowed by CORS'));
		}
	},
	methods: ['GET', 'POST', 'OPTIONS'],
	allowedHeaders: ['Content-Type']
}));

class Email {
    constructor(body, subject) {
        this.text = 'Der ' + body.name + ' hat eine Nachricht gesendet. \n\n' +
			'Email: ' + body.email + '\n' +
			'Nachricht: ' + body.message + '\n\n' ;
        this.subject = subject;
    }
}

app.post('/send-email', (req, res) => {
	console.log(req.body);
    let sender = "kontakt@klimbimgmbh.de";

	let transporter = nodemailer.createTransport({
		host: "smtp.ionos.de",
		port: 465,
		secure: true,
		auth: {
			user: 'kontakt@klimbimgmbh.de',
			pass: 'Klimbimgmbh2025!?'
		},
		authMethod: 'PLAIN',
	});
    
    let email = new Email(req.body, "Kontakt");

    const mailOptions = {
        from: sender,
        to: 'Klimbim-zeitarbeit@hotmail.com',
        subject: email.subject,
        html: email.text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: "Email not sent :" + error });
        } else {
            console.log('Email sent: ' + info.response);
            res.json({ message: "Email sent" });
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  	console.log(`Server is running on port ${port}`);
});