import React, { useState } from 'react';

    function SongGenerator() {
      const [title, setTitle] = useState('');
      const [style, setStyle] = useState('');
      const [lyrics, setLyrics] = useState('');
      const [song, setSong] = useState(null);

      const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/songs/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, style, lyrics })
        });
        const data = await response.json();
        setSong(data);
      };

      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Song Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Music Style"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            />
            <textarea
              placeholder="Lyrics"
              value={lyrics}
              onChange={(e) => setLyrics(e.target.value)}
            />
            <button type="submit">Generate Song</button>
          </form>
          {song && <div>{JSON.stringify(song)}</div>}
        </div>
      );
    }

    export default SongGenerator;
