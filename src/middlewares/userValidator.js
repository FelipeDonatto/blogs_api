const { usersServices } = require('../services');

async function validateEmail(req, res, next) {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (!/[A-z0-9._]+@[a-z]+\.[a-z]{2,3}/.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  const user = await usersServices.findOneByEmail(email);
  if (user !== null) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }
  next();
}
function validatePassword(req, res, next) {
  const { password } = req.body;
  const minLen = 6;
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password.length < minLen) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }

  next();
}
function validateDisplayName(req, res, next) {
  const { displayName } = req.body;
  const minLen = 8;
  if (!displayName) {
    return res.status(400).json({ message: '"displayName" is required' });
  }
  if (displayName.length < minLen) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }

  next();
}

module.exports = { validateEmail, validatePassword, validateDisplayName };
