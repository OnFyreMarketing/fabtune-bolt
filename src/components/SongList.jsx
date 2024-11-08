import React, { useEffect, useState } from 'react';

    function SongList() {
      const [songs, setSongs] = useState([]);

      useEffect(() => {
        fetch('/api/songs')
          .then(response => response.json())
          .then(data => setSongs(data));
      }, []);

      const toggleFavorite = async (id) => {
        const response = await fetch(`/api/songs/${id}/favorite`, { method: 'PATCH' });
        const updatedSong = await response.json();
        setSongs(songs.map(song => song._id === id ? updatedSong : song));
      };

      const togglePublic = async (id) => {
        const response = await fetch(`/api/songs/${id}/public`, { method: 'PATCH' });
        const updatedSong = await response.json();
        setSongs(songs.map(song => song._id === id ? updatedSong : song));
      };

      return (
        <ul>
          {songs.map(song => (
            <li key={song._id}>
              <h3>{song.title}</h3>
              <p>{song.style}</p>
              <button onClick={() => toggleFavorite(song._id)}>
                {song.isFavorite ? 'Unfavorite' : 'Favorite'}
              </button>
              <button onClick={() => togglePublic(song._id)}>
                {song.isPublic ? 'Make Private' : 'Make Public'}
              </button>
            </li>
          ))}
        </ul>
      );
    }

    export default SongList;
