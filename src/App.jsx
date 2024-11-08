import React from 'react';
    import './index.css';
    import RegisterForm from './components/RegisterForm';
    import LoginForm from './components/LoginForm';
    import SongGenerator from './components/SongGenerator';
    import SongList from './components/SongList';
    import AdminDashboard from './components/AdminDashboard';

    function App() {
      return (
        <div>
          <header>
            <h1>FabTune</h1>
          </header>
          <main>
            <RegisterForm />
            <LoginForm />
            <SongGenerator />
            <SongList />
            <AdminDashboard />
          </main>
        </div>
      );
    }

    export default App;
