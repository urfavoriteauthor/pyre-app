import React from 'react';
import './App.css';
import Firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import Cards from './components/cards'

function App() {
  return (
    <div className="App">
     <Cards/>
      
    </div>
  );
}

export default App;
