import React from 'react';
import Main from './components/Main.jsx';
import Sidenav from './components/Sidenav.jsx';
import Work from './components/Work.jsx';
import Proyects from './components/Proyects.jsx';
import Logros from './components/Logros.jsx';
import About from './components/About.jsx';

function App() {
  return (
    <>
      <Sidenav />
      <Main />
      <Work />
      <Proyects />
      <Logros />
    </>
  );
}

export default App;