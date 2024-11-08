const express = require('express');
    const jwt = require('jsonwebtoken');
    const bcrypt = require('bcrypt');
    const User = require('../models/User');

    const router = express.Router();
    const JWT_SECRET = 'your_jwt_secret'; // Replace with a secure secret

    // Register
    router.post('/register', async (req, res) => {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      try {
        const user = new User({ username, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
      } catch (error) {
        res.status(400).json({ error: 'Username already exists' });
      }
    });

    // Login
    router.post('/login', async (req, res) => {
      const { username, password } = req.body;

      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ error: 'Invalid username or password' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ error: 'Invalid username or password' });
      }

      const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    });

    module.exports = router;
