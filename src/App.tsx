import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
//import ToTop from './components/ToTop/ToTop';

function App() {
  return (
    <main className="App">
        <Header/>
        <Hero/>
        <Skills/>
        <Projects/>
        <Contacts/>
        <Footer/>
       {/* <ToTop/>*/}
    </main>
  );
}

export default App;
