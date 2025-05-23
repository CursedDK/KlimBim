const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

const allowedOrigins = [
  'http://localhost:4200',
  'https://klimbimgmbh.de',
  'https://www.klimbimgmbh.de'
];

app.use(cors());


class Email {
  	constructor(body, subject) {
		this.text = 'Der ' + body.name + ' hat eine Nachricht gesendet. \n\n' +
			'Email: ' + body.email + '\n' +
			'Nachricht: ' + body.message + '\n\n' ;
		this.subject = subject;
  	}
}

app.use((req, res, next) => {
  	const origin = req.headers.origin;
  	if (allowedOrigins.includes(origin)) {
			res.setHeader('Access-Control-Allow-Origin', origin);
  	}
  	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  	next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.post('/send-email', (req, res) => {
	res.json({ success: true });
  	console.log('Attempting to send email with body:', req.body);
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

  	try {
    		transporter.sendMail(mailOptions, (error, info) => {
      			if (error) {
      				console.error('Email sending failed:', error);
      				res.status(500).json({ error: "Email not sent :" + error });
      			} else {
      				console.log('Email sent successfully:', info.response);
      				res.json({ message: "Email sent" });
      			}
    		});
  	} catch (err) {
    		console.error('Exception occurred during email sending:', err);
    		res.status(500).json({ error: "Exception occurred during email sending: " + err });
  	}
});

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
app.listen(port, () => {
	  console.log(`Server is running on port ${host} ${port}`);
});
