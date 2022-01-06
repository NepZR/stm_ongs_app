const express = require('express');
const routes = require('./routes');
const database = require('./database');
const cors = require('cors');

const app = express();
database.sync()

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(8080, () => console.log('🔥 Server started at http://localhost:8080'));