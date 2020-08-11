const bcrypt = require('bcryptjs');

const helpers = {};

helpers.encryptPassword = async (contraseña) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(contraseña, salt);
  return hash;
};

helpers.matchPassword = async (contraseña, savedPassword) => {
  try {
    return await bcrypt.compare(contraseña, savedPassword);
  } catch (e) {
    console.log(e)
  }
};

module.exports = helpers;