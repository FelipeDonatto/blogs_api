const express = require('express');
const { userLogin } = require('./controllers/users.controller');

// ...

const app = express();

app.use(express.json());

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

app.post('/login', async (req, res) => {
  await userLogin(req, res);
});

module.exports = app;
