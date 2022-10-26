const JWT = require('jsonwebtoken');
const { usersServices } = require('../services');

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }

  const user = await usersServices.findOneByEmail(email);
  if (user === null || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  res.status(200).json({
    token: JWT.sign({ data: { email } }, process.env.JWT_SECRET, {
      expiresIn: '24h',
    }),
  });
};

const userCreate = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  await usersServices.createNewUser(
    displayName,
    email,
    password,
    // meu fixAll on save tava colocando uma virgula por algum motivo
    // eslint-disable-next-line comma-dangle
    image,
  );

  res.status(201).json({
    token: JWT.sign(
      { data: { displayName, email, password, image } },
      process.env.JWT_SECRET,
      {
        expiresIn: '24h',
      },
    ),
  });
};

module.exports = { userLogin, userCreate };
