const express = require('express');
const routes = require('./routes');
const database = require('./database');
const cors = require('cors')

const app = express();
app.use(cors())
database.sync()
//database.sync({force:true});

app.use(express.json());
app.use(routes);

app.listen(8080, () => console.log('🔥 Server started at http://localhost:8080'))