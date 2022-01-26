import React from 'react';
import axios from 'axios';
import Navigation from './Navigation.jsx';
import Main from './Main.jsx';
import CheckDestination from './CheckDestination.jsx';
import CreatureLookup from './CreatureLookup.jsx';
import ReportActivity from './ReportActivity.jsx';
import SafeHavens from './SafeHavens.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'main'
    }
    this.renderPage = this.renderPage.bind(this);
    this.newPage = this.newPage.bind(this);
  }

  renderPage() {
    switch (this.state.page) {
      case 'main':
        return (<Main />);
      case 'checkdestination':
        return (<CheckDestination />);
      case 'creaturelookup':
        return (<CreatureLookup />);
      case 'reportactivity':
        return (<ReportActivity />);
      case 'safehavens':
        return (<SafeHavens />);
    }
  }

  newPage(param) {
    this.setState({
      page: param
    })
  }

  render () {
    return (<div className="App-Container">
      <Navigation newPage={this.newPage} />
      {this.renderPage()}
    </div>)
  }
}

export default App;