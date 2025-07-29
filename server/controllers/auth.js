const User = require('../models/user');

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        error: 'User with that email already exists',
      });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.json({
      message: 'Signup success! Please login.',
    });
  } catch (err) {
    console.error('Signup Error:', err);
    res.status(500).json({
      error: 'Error saving user in database. Try again.',
    }); 
  }
};
