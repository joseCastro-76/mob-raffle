const express = require('express');
const fs = require('fs');
const app = express();
var PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('listening at 3000'));
app.use(express.static('Public'));
app.use(express.json({ limit: '1mb'}));

app.post('/api', (request, response) => {
    response.end()
});

app.get('/api', (request, response) => {
    response.end()
});

app.get('/', (request, response) => {
    response.sendFile('index.html', {root: __dirname })
});

app.get('/results', (request, response) => {
    response.sendFile('results.html', {root: __dirname })
});

app.get('/data', (request, response) => {
    response.sendFile('info.json', {root: __dirname });
});

