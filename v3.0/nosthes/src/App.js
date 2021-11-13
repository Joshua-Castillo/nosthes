import './App.css';

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Languages from './Components/Pages/Languages.jsx';
import Home from './Components/Pages/Home.jsx';
import Acceuil from './Components/Pages/Acceuil.jsx';
import MenuEn from './Components/Pages/Menu.jsx';
import MenuFr from './Components/Pages/Menu_Fr.jsx';


function App() {
  return (
    <Router>
      <Fragment>

        <Route exact path='/' component={Languages} />
        <Switch>

          <Route exact path='/acceuil' component={Acceuil} />
          <Route exact path='/home' component={Home} />

          <Route exact path='/menu-fr' component={MenuFr} />
          <Route exact path='/menu-en' component={MenuEn} />

        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
