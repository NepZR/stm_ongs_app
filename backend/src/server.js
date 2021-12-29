const express = require('express');
const routes = require('./routes');

const database = require('./database/index.js')
require('./database/index.js');
const app = express();
database.sync();
app.use(express.json());
app.use(routes);

app.listen(8080, () => console.log('🔥 Server started at http://localhost:3030'))