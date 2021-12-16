const express = require('express');
const routes = require('./routes');
const cors = require('cors')
const db = require('./controllers/dbController');
const { response } = require('express');
const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

<<<<<<< HEAD:backend/app/index.js
app.listen(8000, (request, response) => {
    console.log('Funcionou. http://localhost:8000/');
})
=======
app.listen(3030, () => console.log('🔥 Server started at http://localhost:8080'))
>>>>>>> feature/backend:backend/src/index.js
