const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/welcome', (req, res) => {
	res.send(welcomeMenu());
});

const welcomeMenu = () => {
	return `
		<Response>
			<Say>Welcome to the New Cope Hotline!</Say>
			<Gather action="/handle-main-menu" method="POST" numDigits="1">
				<Say>Press 1 to hear the history of New Cope.</Say>
				<Say>Press 2 for New Cope trivia.</Say>
				<Say>Press 3 to leave a message for us.</Say>
				<Say>Press 0 to talk to a representative.</Say>
			</Gather>
		</Response>
	`;
};


app.post('/handle-main-menu', (req, res) => {
	const selectedOption = req.body.Digits;
	
	switch (selectedOption) {
		case '1':
			res.send(historyOfNewCope());
			break;
		case '2':
			res.send(newCopeTrivia());
			break;
		case '3':
			res.send(leaveAMessage());
			break;
		case '0':
			res.send(talkToRepresentative());
			break;
		default:
			res.send(mainMenu());
	}
});

const mainMenu = () => {
	return `
		<Response>
			<Gather numDigits="1" action="/handle-main-menu" method="POST">
				<Say>
					Press 1 to hear about the history of New Cope.
					Press 2 to listen to some cool New Cope trivia.
					Press 3 to leave us a feedback or a fun message.
					Press 0 to speak with a representative.
				</Say>
			</Gather>
		</Response>
	`;
};

const historyOfNewCope = () => {
	return `
		<Response>
			<Say>Back in 1987, New Cope was born out of a desire to figure out how to make it through the great acceleration.</Say>
			<Pause length="1"/>
			<Say>Press any key to go back to the main menu.</Say>
		</Response>
	`;
};

const newCopeTrivia = () => {
	return `
		<Response>
			<Say>Did you know that... New Cope is the only way to make it through these trying times?</Say>
			<Pause length="1"/>
			<Say>Press any key to go back to the main menu or wait to hear another trivia.</Say>
		</Response>
	`;
};

const leaveAMessage = () => {
	return `
		<Response>
			<Say>After the beep, leave us a fun message or feedback about New Cope. Press the hash key when you're done.</Say>
			<Record maxLength="30" action="/handle-recording" finishOnKey="#" />
		</Response>
	`;
};

const talkToRepresentative = () => {
	return `
		<Response>
			<Say>Connecting you to our representative. Just kidding, but we're glad you're so eager! Press any key to return to the main menu.</Say>
		</Response>
	`;
};

app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}`);
});
