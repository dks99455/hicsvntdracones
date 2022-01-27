import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { maps_api_key } from '../../config.js'

const ReportActivity = (props) => {
  const [landmark, setLandmark] = useState('');
  const [describe, setDescribe] = useState('');

  return( //Makes a post request to database
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${maps_api_key}`)
        .then((response) => {
          axios.post(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${response.data.location.lat},${response.data.location.lng}&key=${maps_api_key}`)
          .then((nextResponse) => {
            let data = nextResponse.data.results[0];
            axios.post('http://localhost:3000/sreport', {
              city: data.address_components[1].long_name,
              country: data.address_components[4].long_name,
              description: describe,
              location: landmark,
              state: data.address_components[3].long_name,
              state_abbrev: data.address_components[3].short_name,
              longitude: data.geometry.location.lng,
              latitude: data.geometry.location.lat,
              city_longitude: null,
              city_latitude: null
            })
            .catch(err => console.log(err));
            setLandmark('');
            setDescribe('');
            alert('Thank you for leaving a warning.');
            props.newPage('main');
          })
        })
        .catch((err) => {
          console.log(err);
        })

      }}>
        <div>
          <div>Name a Nearby Landmark:</div>
          <input id="reportlandmark" type="text" placeholder="Name of landmark or location of sighting" onChange={(e) => {
            setLandmark(e.target.value);
          }}></input>
        </div>
        <div>
          <div>Leave your warning for other travelers:</div>
          <textarea id="reportdescription" placeholder="What did you see? Please be as descriptive as you can." onChange={(e) => {
            setDescribe(e.target.value);
          }}></textarea>
        </div>
        <button id="makeReport" type="submit">SUBMIT</button>
      </form>
    </div>
  )
}

export default ReportActivity;