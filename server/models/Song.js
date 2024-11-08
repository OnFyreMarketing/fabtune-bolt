const mongoose = require('mongoose');

    const songSchema = new mongoose.Schema({
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      title: { type: String, required: true },
      style: { type: String, required: true },
      lyrics: { type: String, required: true },
      isFavorite: { type: Boolean, default: false },
      isPublic: { type: Boolean, default: false }
    });

    module.exports = mongoose.model('Song', songSchema);
