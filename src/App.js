import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header';


import FormScreen2 from './Screens/FormScreen2'
import FormScreen from './Screens/FormScreen';
import Home from './Components/Home';
function App() {
  return (
    <Router className='App'>
    <Header/>
   
    <Route path='/' component={Home} exact/>
    <Route path='/form' component={FormScreen}/>
    <Route path='/form2' component={FormScreen2}/>
   </Router>
    );
}

export default App;
