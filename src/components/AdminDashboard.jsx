import React, { useEffect, useState } from 'react';

    function AdminDashboard() {
      const [users, setUsers] = useState([]);
      const [stats, setStats] = useState({ userCount: 0, songCount: 0 });

      useEffect(() => {
        fetch('/api/admin/users')
          .then(response => response.json())
          .then(data => setUsers(data));

        fetch('/api/admin/stats')
          .then(response => response.json())
          .then(data => setStats(data));
      }, []);

      const updateCredits = async (id, credits) => {
        const response = await fetch(`/api/admin/users/${id}/credits`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ credits })
        });
        const updatedUser = await response.json();
        setUsers(users.map(user => user._id === id ? updatedUser : user));
      };

      return (
        <div>
          <h1>Admin Dashboard</h1>
          <h2>Statistics</h2>
          <p>Users: {stats.userCount}</p>
          <p>Songs: {stats.songCount}</p>
          <h2>Users</h2>
          <ul>
            {users.map(user => (
              <li key={user._id}>
                {user.username} - Credits: {user.credits}
                <button onClick={() => updateCredits(user._id, user.credits + 10)}>Add 10 Credits</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default AdminDashboard;
