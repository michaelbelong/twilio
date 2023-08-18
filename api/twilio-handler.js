module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(`
	<Response>
		<Say voice="alice">Hello! You fuckin' suck.</Say>
		<Play>https://metanorm.com/MetanormFM-Context-Intro-v3.mp3</Play>
	</Response>
  `);
};
