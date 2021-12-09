const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { AuthenticationError } = require('apollo-server');

const authMiddleware = async (context) => {
  let token;

  if (context.authScope && context.authScope.startsWith('Bearer'))
    token = context.authScope.split(' ')[1];
  if (!token) return false;

  try {
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return false;
    context.authScope.user = user;

    return true;
  } catch (error) {
    return false;
  }
};

module.exports = { authMiddleware };
