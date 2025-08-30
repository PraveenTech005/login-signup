const bcrypt = require("bcrypt");

const hashpass = async (password, saltRounds = 10) => {
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (err) {
    console.error("Hashing failed:", err);
    throw err;
  }
};

const checkPass = async (password, hash) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (err) {
    console.error("Password check failed:", err);
    throw err;
  }
};

module.exports = { hashpass, checkPass };
