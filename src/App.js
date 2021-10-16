import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';


import FormScreen2 from './Screens/FormScreen2'
import FormScreen from './Screens/FormScreen';
import HomecareScreen from './Screens/HomecareScreen'
import Home from './Components/Home';
import About from './Components/About'
import Events from './Components/Events'
function App() {
  return (

    <Router className="App">
      <Header />

      <Route path="/" component={Home} exact />
      <Route path="/form" component={FormScreen} />
      <Route path="/form2" component={FormScreen2} />
      <Route path="/hcare" component={HomecareScreen} />
      <Footer />
    </Router>
  );

}

export default App;
