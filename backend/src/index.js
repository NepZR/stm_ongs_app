const express = require('express');
const routes = require('./routes');
const cors = require('cors')
const db = require('./controllers/dbController');
const { response } = require('express');
const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3030, () => console.log('🔥 Server started at http://localhost:8080'))
