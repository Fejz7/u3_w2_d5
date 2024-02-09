import logo from './logo.svg';
import './App.css';
import MyNavbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainWeather from './Components/MainWeather';

function App() {
  return (
    <div className="App">
      <>
      
      
     
      <MyNavbar />
      <MainWeather />

      
      
      
    </>
    </div>
  );
}

export default App;
