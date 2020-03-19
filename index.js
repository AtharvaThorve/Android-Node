const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
	console.log('Get request executed');
	res.send([{
		id: 1,
		userid:  1,
		title: 'Get request execution',
		body: 'Body of get request'
	}]);
});

const port = 3000;
app.listen(3000, '192.168.29.107', () => {
	console.log(`App running on port ${port}`);
});
