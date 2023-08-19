module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(`
	<Response>
		<Say voice="Polly.Joanna">Hello! Welcome to the New Cope hotline!</Say>
		<Pause length="1"/>
		<Say voice="Polly.Joanna">We are currently experiencing higher than normal call volumes.</Say>
		<Pause length="1"/>
		<Say voice="Polly.Joanna">Please stay on the line and we will answer your call in the order it arrived.</Say>
		<Pause length="1"/>
		<Say voice="Polly.Joanna">You are caller 6-6-6. Thank you.</Say>
		<Play>https://metanorm.com/OpusNo1.mp3</Play>
	</Response>
  `);
};
