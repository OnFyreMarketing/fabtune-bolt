const express = require('express');
    const User = require('../models/User');
    const router = express.Router();

    // Get all users
    router.get('/users', async (req, res) => {
      const users = await User.find();
      res.json(users);
    });

    // Update user credits
    router.patch('/users/:id/credits', async (req, res) => {
      const { id } = req.params;
      const { credits } = req.body;
      const user = await User.findById(id);
      user.credits = credits;
      await user.save();
      res.json(user);
    });

    // Get app statistics
    router.get('/stats', async (req, res) => {
      const userCount = await User.countDocuments();
      const songCount = await Song.countDocuments();
      res.json({ userCount, songCount });
    });

    module.exports = router;
