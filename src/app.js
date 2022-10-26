const express = require('express');
const {
  addCategory,
  getAllCategories,
} = require('./controllers/category.controller');
const {
  userLogin,
  userCreate,
  getAllUsers,
  getById,
} = require('./controllers/users.controller');
const { validateToken } = require('./middlewares/tokenValidator');
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

app.get('/user', validateToken, async (req, res) => {
  await getAllUsers(req, res);
});

app.get('/user/:id', validateToken, async (req, res) => {
  await getById(req, res);
});

app.post('/categories', validateToken, async (req, res) => {
  await addCategory(req, res);
});

app.get('/categories', validateToken, async (req, res) => {
  await getAllCategories(req, res);
});

module.exports = app;
