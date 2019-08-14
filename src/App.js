import React, {useState} from 'react';
import ReactDOM from "react-dom";

import Form from './components/Form.js';
import TeamCard from './components/TeamCard.js';
import data from './data.js';

import './App.css';

function App() {
  const [team, setTeam] = useState(data);

  const addTeam = tea => {
    setTeam([...team, tea])
  };
  
 
  return (
    <div className="App">
      <div className="container">
        <Form addTeam={addTeam}/>
      
      <TeamCard teamList={team} /></div>
    </div>
  );
}

export default App;
