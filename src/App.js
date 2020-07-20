import React from 'react';
import logo from './logo.svg';
import './App.css';
import CompanyName from './Components/CompanyName';
import Navbar from './Components/NavBar';
import Header from './Components/Header'
import MainContainer from './Components/maincontainer/MainContainer'
import Footer from "./Components/footer/Footer"
function App() {
  return (
    <div className="App">
  <Header/>
<MainContainer/>
<Footer/>
    </div>
  );
}

export default App;
