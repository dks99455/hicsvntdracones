import React from 'react';
import axios from 'axios';
import Navigation from './Navigation.jsx';
import Main from './Main.jsx';
import Location from './Location.jsx';
import Creatures from './Creatures.jsx';
import Spirits from './Spirits.jsx';
import SafeHavens from './SafeHavens.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (<div className="App-Container">
      <Navigation/>
    </div>)
  }
}

export default App;