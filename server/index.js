import express from 'express';

import fs from 'fs';

const app = express();

const pathToData = new URL('data/data.json', import.meta.url);

const data = JSON.parse(fs.readFileSync(pathToData));

app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});

app.get('/api/v1/tree', (_, res) => {
    setTimeout(() => {
        res.json(data);
    }, 300);
});

app.listen(3001, (_) => {
    console.log('API server running on localhost:3001');
});
