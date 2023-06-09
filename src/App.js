import React from 'react';
import style from './App.module.css'
import About from './Components/About/About';
import NavBar from './Components/NavBar/NavBar';
import Contact from './Components/Contact/Contact';
import Project from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <main className={style.App}>
      <NavBar />
      <About />
      <Skills />
      <Project />
      <Contact />  
    </main>
  );
}

export default App;
