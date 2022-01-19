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
import SpecialitiesScreen from './Screens/SpecialitiesScreen'
import LoginScreen from './Screens/Login/LoginScreen';
import Staffscreen from './Screens/Staffscreen'
import Appointments from './Screens/Appointments'
import Applicationforms from './EducationPortal/Applicationforms'
import Applicationforms2 from './EducationPortal/Applicationforms2'
import Applicationforms3 from './EducationPortal/Applicationforms3';
import StudentLogin from './EducationPortal/StudentLogin';
import HomePage from './EducationPortal/HomePage';
import StudentDashboard from './EducationPortal/StudentDashboard';
import Programs from './EducationPortal/Programs'
import StudentProfile from './EducationPortal/StudentProfile';
import Profile from './Screens/Profile'


require('dotenv').config();

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
      <Route path="/login" component={LoginScreen}></Route>
      <Route path="/about" component={Aboutscreen}></Route>
      <Route path="/staff" component={Staffscreen}></Route>
      <Route path="/specialities" component={SpecialitiesScreen}></Route>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/appts" component={Appointments}></Route>
      <Route path="/applicationforms" component={Applicationforms}></Route>
      <Route path="/applicationforms2" component={Applicationforms2}></Route>
      <Route path="/applicationforms3" component={Applicationforms3}></Route>
      <Route path="/studentlogin" component={StudentLogin}></Route>
      <Route path="/studenthome" component={HomePage}></Route>
      <Route path="/StudentDashboard" component={StudentDashboard}></Route>
      <Route path="/StudentProfile" component={StudentProfile}></Route>
      <Route path="/programs" component={Programs}></Route>
      <Footer />
    </Router>
  );

}

export default App;
