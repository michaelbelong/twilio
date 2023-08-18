module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(`
	<Response>
		<Say voice="alice">Hello! Welcome to the New Cope hotline! Please hold.</Say>
		<Say voice="alice">We are currently experiencing higher than normal call volumes please stay on the line and we will answer your call in the order it arrived. Thank you.</Say>
		<Play>https://metanorm.com/OpusNo1.mp3</Play>
	</Response>
  `);
};
