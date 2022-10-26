const express = require('express');
const { userLogin, userCreate } = require('./controllers/users.controller');
const {
  validateDisplayName,
  validateEmail,
  validatePassword,
} = require('./middlewares/userValidator');

// ...

const app = express();

app.use(express.json());

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

app.post('/login', async (req, res) => {
  await userLogin(req, res);
});

app.post(
  '/user',
  validateDisplayName,
  validateEmail,
  validatePassword,
  async (req, res) => {
    await userCreate(req, res);
  },
);

module.exports = app;
