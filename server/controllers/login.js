const jwt = require('jsonwebtoken');
const {BadRequestError} = require('../errors/bad-request');

const login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError('Please provide login and password');
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET,
    { expiresIn: '30d' });

  res.status(200).json({
    // msg: `User created`,
    token: token
  });
};

module.exports = {
  login,
}

//todo auth middleware
