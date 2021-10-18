import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header';

import HomecareScreen from './Screens/HomecareScreen'


import Home from './Components/Home';

function App() {
  return (
    <Router className='App continer'>
    <Header/>
  
    <Route path='/' component={Home} exact/>
    
    <Route path="/hcare" component={HomecareScreen} />
    
   </Router>
    );
}

export default App;
