import React from 'react';
import axios from 'axios';
import { maps_api_key } from '../../config.js'
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
      page: 'main',
      longitude: null,
      latitude: null,
      reports: [],
      safehavens: []
    }
    this.renderPage = this.renderPage.bind(this);
    this.newPage = this.newPage.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.retrieveReports = this.retrieveReports.bind(this);
    this.setCoordinates = this.setCoordinates.bind(this);
  }
  componentDidMount() {
    if(this.state.longitude === null && this.state.latitude === null){
      this.getCoordinates();
    }
  }

  renderPage() {
    switch (this.state.page) {
      case 'main':
        return (<Main newPage={this.newPage}/>);
      case 'checkdestination':
        return (<CheckDestination setCoordinates={this.setCoordinates} reports={this.state.reports} longitude={this.state.longitude} latitude={this.state.latitude} />);
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

  retrieveReports(longitude, latitude) {
    axios.get('http://localhost:3000/sreport', {
      params: {
        longitude: longitude,
        latitude: latitude
      }
    })
    .then((response) => {
      this.setState({
        reports: response.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  postReport(coordinates) {

  }

  getCoordinates() {
    axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${maps_api_key}`)
    .then((response) => {
      this.setState({
        longitude: response.data.location.lng,
        latitude: response.data.location.lat
      }, () => {
        this.retrieveReports(this.state.longitude, this.state.latitude);
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  setCoordinates(lng, lat) {
    this.setState({
      longitude: lng,
      latitude: lat
    }, () => {
      this.retrieveReports(this.state.longitude, this.state.latitude);
    })
  }

  render () {
    return (<div className="App-Container">
      <Navigation newPage={this.newPage} />
      {/* <div onClick={() => {this.retrieveReports(this.state.longitude, this.state.latitude)}}>TEST</div> */}
      {this.renderPage()}
    </div>)
  }
}

export default App;