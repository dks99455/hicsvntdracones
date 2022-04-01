import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { maps_api_key } from '../../config.js';

const SafeHavens = (props) => {
  const [field, setField] = useState('');
  const [longi, setLongi] = useState('');
  const [lati, setLati] = useState('');
  const sourceAddress = `https://www.google.com/maps/embed/v1/search?key=${maps_api_key}&q=church+and+police&center=${props.coordinates.latitude},${props.coordinates.longitude}&maptype=roadmap&zoom=10`

  return( //displays churches and law enforcement nearby
    <div>
      <div>SafeHavens</div>
      <div>For a more accurate search, please provide your ZIP or Coordinates</div>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (field !== "") {
          axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${field}&key=${maps_api_key}`)
          .then((response) => {
            let coordinates = response.data.results[0].geometry.location;
            props.setCoordinates(coordinates.lng, coordinates.lat);
          })
          .catch(err => console.log(err));
        } else if (longi !== "" && lati !== "") {
          props.setCoordinates(longi, lati);
        } else if (field === "" && longi === "" && lati === "") {
          alert("No location provided");
        } else if (longi === "" || lati === "") {
          alert("Please fill in the zip code OR provide both coordinates");
        }
      }}>
        <input id="mapAddress" type="text" placeholder="Enter ZIP Code" onChange={(e) => {
          setField(e.target.value);
          setLongi('');
          setLati('');
          document.getElementById('mapLongi').value = '';
          document.getElementById('mapLati').value = '';
        }}></input>
        <label>: OR :
          <input id="mapLongi" type="text" placeholder="Longitude" onChange={(e) => {
            setLongi(e.target.value);
            setField('');
            document.getElementById('mapAddress').value = '';
          }}></input>
          <input id="mapLati" type="text" placeholder="Latitude" onChange={(e) => {
            setLati(e.target.value);
            setField('');
            document.getElementById('mapAddress').value = '';
          }}></input>
        </label>
        <button type="submit">SUBMIT</button>
      </form>
      <iframe
        src={sourceAddress}
        width='600'
        height='450'
        style={{ border: 0 }}
        loading='lazy'
        allowfullscreen
        referrerpolicy='no-referrer-when-downgrade'
      >
      </iframe>
    </div>
  )
}

export default SafeHavens;