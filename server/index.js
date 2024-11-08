const express = require('express');
    const mongoose = require('mongoose');
    const authRoutes = require('./routes/auth');
    const songRoutes = require('./routes/songs');

    const app = express();
    const PORT = process.env.PORT || 3000;

    mongoose.connect('mongodb://localhost:27017/fabtune', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      console.log('Connected to MongoDB');
    }).catch(err => {
      console.error('Error connecting to MongoDB', err);
    });

    app.use(express.json());
    app.use('/api/auth', authRoutes);
    app.use('/api/songs', songRoutes);

    app.get('/', (req, res) => {
      res.send('FabTune Backend is running');
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
