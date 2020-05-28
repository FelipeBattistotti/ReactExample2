const express = require('express');
const app = express();

let i = 0;

app.get('/', (req, res) => {
    i++;
    res.send('Oi Felipe ' + i);
});

app.listen(3000, () => {
    console.log('Servidor rodando...');
});
