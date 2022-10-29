import { Fragment } from 'react';
import Scan from './components/scan';
import './App.css';
import { wait } from '@testing-library/user-event/dist/utils';

const fetchDbz = async (characters) =>{
  const response = await fetch(`https://dragon-ball-super-api.herokuapp.com/api/characters/${characters}`);
  
  const data = await response.json();
  return data;
}

function App() {
  return (
    <div>
      <h1>Counter DBZ</h1>
      <Scan src_img='/img/counter.png' characterName={null} />
    </div>
  );
}

export default App;
