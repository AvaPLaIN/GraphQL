const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { AuthenticationError } = require('apollo-server');

const authMiddleware = async (context, callback) => {
  let token;

  if (context.authScope && context.authScope.startsWith('Bearer'))
    token = context.authScope.split(' ')[1];
  if (!token) throw new AuthenticationError('Provide Token');

  try {
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) throw new AuthenticationError('Not authenticated');
    context.authScope.user = user;

    return callback(context);
  } catch (error) {
    throw new AuthenticationError('Not authenticated');
  }
};

module.exports = { authMiddleware };
