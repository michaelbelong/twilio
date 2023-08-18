module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(`
	<Response>
		<Say voice="alice">Hello! This is your Twilio response from a Vercel serverless function.</Say>
	</Response>
  `);
};
