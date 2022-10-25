const { User } = require('../models');

const findOneByEmail = (email) => {
  const user = User.findOne({ where: { email } });
  return user;
};
module.exports = { findOneByEmail };
