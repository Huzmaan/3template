import React from 'react';
import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'



function App() {
  return (  
   <Router>
   <Navbar></Navbar>

   <Header></Header>
   <Main></Main>
   <Footer></Footer>
   </Router>
  );
}

export default App;
