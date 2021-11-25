import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

import HomecareScreen from './Screens/HomecareScreen'
import Specialities from './Screens/SpecialitiesScreen';
import Aboutscreen from './Screens/Aboutscreen';

import Register from './Screens/Register'
import FormScreen from './Screens/FormScreen';
import ResearchScreen from './Screens/ResearchScreen'
import EmeservSreen from './Screens/EmeservSreen'
import Moeventscreen from './Screens/Moeventscreen';
import Home from './Components/Home';
import Articlescreen from './Screens/Articlescreen';
import SpecialitiesScreen from './Screens/SpecialitiesScreen'
import LoginScreen from './Screens/LoginScreen'
import EventReg from './Screens/EventRegForm';
require('dotenv').config()
function App() {
  return (
    <Router className="App">
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/form" component={FormScreen} />
      <Route path="/register" component={Register} />
      <Route path="/hcare" component={HomecareScreen} />
      <Route path="/rscreen" component={ResearchScreen} />
      <Route path="/specscreen" component={Specialities} />
      <Route path="/emergservice" component={EmeservSreen} />
      <Route path="/moeevents" component={Moeventscreen} />
      <Route path="/articles" component={Articlescreen}></Route>
      <Route path="/login" component={LoginScreen}></Route>
      <Route path="/about" component={Aboutscreen}></Route>
      <Route path="/about" component={EventReg}></Route>
      <Route path="/specialities" component={SpecialitiesScreen}></Route>
      <Footer />
    </Router>
  );

}

export default App;
