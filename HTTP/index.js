const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.json({ status: "Hello World !!!" })
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>404! not found</h1>');
});


app.listen(port, function () {
    console.log('listening on port', port);
})