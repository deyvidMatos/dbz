import { Link, Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';


  function App() {

  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  );

}

export default App;
