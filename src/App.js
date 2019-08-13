import React, {useState} from 'react';
import Form from './components/Form.js';

import './App.css';

function App() {

  const [team, setTeam] = useState([]);

 function handleTeam(event){
    event.preventDefault();
    const updatedTeam = { ...team};
    setTeam(updatedTeam);
    console.log(team);
  }
  
 
  return (
    <div className="App">
      <Form onSubmit={handleTeam}/>
      <div>Team members: {team}</div>
    </div>
  );
}

export default App;
