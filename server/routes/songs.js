const express = require('express');
    const Song = require('../models/Song');
    const router = express.Router();

    // Get all songs for a user
    router.get('/', async (req, res) => {
      const userId = req.userId; // Assume userId is available from authentication middleware
      const songs = await Song.find({ userId });
      res.json(songs);
    });

    // Update song favorite status
    router.patch('/:id/favorite', async (req, res) => {
      const { id } = req.params;
      const song = await Song.findById(id);
      song.isFavorite = !song.isFavorite;
      await song.save();
      res.json(song);
    });

    // Update song public status
    router.patch('/:id/public', async (req, res) => {
      const { id } = req.params;
      const song = await Song.findById(id);
      song.isPublic = !song.isPublic;
      await song.save();
      res.json(song);
    });

    module.exports = router;
