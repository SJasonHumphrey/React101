import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../css/App.css';

const App = () =>{
    return (
      <div className="App">
        <Display />
        <ButtonPanel />
      </div>
    );
}


export default App;