import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
import {Route, Routes} from 'react-router-dom';
import About from './components/About/About';
import Burger from './components/Burger/Burger';

function App() {

    return (
        <main className="App">
            <Header/>
            <Burger/>
            <Routes>
                <Route path="/*" element={<Hero/>}/>
                <Route path="contact" element={<Contacts/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="portfolio" element={<Projects/>}/>
            </Routes>
        </main>
    )
}

export default App;
