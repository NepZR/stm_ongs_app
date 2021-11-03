const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);
app.listen(8000, (request, response) => {
    console.log('Funcionou. http://localhost:8000/');
})
