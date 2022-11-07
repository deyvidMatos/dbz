import { Link, Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import ToHome from './components/toHome';


  function App() {

  return (
    <div>
      <Navbar/>
      <Outlet/>
      <ToHome/>
    </div>
  );

}

export default App;
