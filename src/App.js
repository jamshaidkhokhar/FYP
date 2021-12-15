import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
import Page3 from './components/pages/page3';
import Page4 from './components/pages/Page4';
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
    
      <Router>
        
        <Navbar />
        <Switch>
          <Route path='/page1' component={Page1}/>
          <Route path='/page2' component={Page2}/>
          <Route path='/page3' component={Page3}/>
          <Route path='/page4' component={Page4}/>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          
        </Switch>
        
      </Router>
    </>
  );
}

export default App;