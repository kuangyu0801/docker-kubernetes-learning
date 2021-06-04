const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient(
    {
        host: 'redis-server',
        port: 6379
    }
);
client.set('visits', 0);
// root route
app.get('/', (req, res) => {
    // force exit w/
    process.exit(0);
    // query redis server
    client.get('visits', (err, visits) => {
        res.send('Number of visits is: ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, ()=> {
    console.log('Listenig on port 8081');
});