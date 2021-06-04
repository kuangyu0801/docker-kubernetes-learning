const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient();

// root route
app.get('/', (req, res) => {
    // query redis server
    client.get('visits', (err, visits) => {
        res.send('Number of visits is' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, ()=> {
    console.log('Listenig on port 8081');
});