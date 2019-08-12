import React, {useState} from 'react';
import Form from './components/Form.js';

import './App.css';

function App() {

  const [team, setTeam] = useState([]);

  return (
    <div className="App">
      <Form/>
    </div>
  );
}

export default App;
