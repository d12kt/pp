const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'pub')));

app.get('/', (req, res) => {
    res.sendFile('${__dirname}/pub/index.html');
});

app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});
