var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'youremail@gmail.com',
		pass: 'yourpassword'
	}
});

var mailOptions = {
	from: 'youremail@gmail.com',
	to: 'myfriend@yahoo.com, myOtherFriend@yahoo.com',
	subject: 'Sending email with Node.js',
	text: 'That was easy!'
};

var mailOptionsHTML = {
	from: 'youremail@gmail.com',
	to: 'myfriend@yahoo.com, myOtherFriend@yahoo.com',
	subject: 'Sending email with Node.js',
	html: '<h1>Hey there!</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
})