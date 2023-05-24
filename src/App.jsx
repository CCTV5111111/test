import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import './style/App.css';
import { useState } from 'react';

export default function App() {
  const [currentMenu, setCurrentMenu] = useState('子菜单1-1');
  return (
    <div>
      <Header />
      <div className='content'>
        <Sidebar
          onChangeText={setCurrentMenu}
          currentMenu={currentMenu}
        />
        <Main
          currentMenu={currentMenu}
          onSaveText={setCurrentMenu}
        />
      </div>
    </div>
  );
}
