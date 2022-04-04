import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Profile/Dialogs/DialogsContainer';

function App() {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs*"
            element={<DialogsContainer />}
          />
          <Route
            path="/profile*"
            element={(
              <Profile />
                        )}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
