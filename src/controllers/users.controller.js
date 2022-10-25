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
  console.log(user);
  if (user === null || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  res.status(200).json({
    token: JWT.sign({ data: { email } }, process.env.JWT_SECRET, {
      expiresIn: '24h',
    }),
  });
};

module.exports = { userLogin };
