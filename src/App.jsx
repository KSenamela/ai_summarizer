import React from 'react';

import Demo from './components/Demo';
import Hero from './components/Hero';

import './App.css';


const App = () => {
  return (
    <main>
      <div className='main'>
        {/* Applying a gradient background to main page */}
        <div className='gradient' /> 
      </div>

      <div className='app'>
            <Hero />
            <Demo />
      </div>
    </main>
  )
}

export default App
