// Example Express.js application
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
	res.json({
		message: 'Hello World!',
		timestamp: new Date().toISOString(),
	});
});

app.get('/health', (req, res) => {
	res.status(200).json({ status: 'OK' });
});

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

module.exports = app;
