import React, { useState, useEffect } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import axios from 'axios';
import ReportModal from './ReportModal.jsx';
import { maps_api_key } from '../../config.js';

const CheckDestination = (props) => {

  const [reports, setReports] = useState([]);
  const [field, setField] = useState('');
  const [longi, setLongi] = useState('');
  const [lati, setLati] = useState('');


  useEffect(() => {
    setReports(props.reports);
  }, [props.longitude, props.latitude])

  return( //Checks for supernatural reports on the path to location
    <div>
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
        <input id="enteraddress" type="text" placeholder="Enter ZIP Code" onChange={(e) => {
          setField(e.target.value);
          setLongi('');
          setLati('');
          document.getElementById('enterlongi').value = '';
          document.getElementById('enterlati').value = '';
        }}></input>
        <label>. or Coordinates: .
          <input id="enterlongi" type="text" placeholder="Longitude" onChange={(e) => {
            setLongi(e.target.value);
            setField('');
            document.getElementById('enteraddress').value = '';
          }}></input>.
          <input id="enterlati" type="text" placeholder="Latitude" onChange={(e) => {
            setLati(e.target.value);
            setField('');
            document.getElementById('enteraddress').value = '';
          }}></input>.
        </label>
        <button type="submit">SUBMIT</button>
      </form>
      <div className='r_title'>Shadows found near coordinates: Longitude:{props.longitude} , Latitude:{props.latitude}</div>
      {props.reports.map((report, index) => (<ReportModal report={report} key={index} index={index} />))}
    </div>
  )
}

export default CheckDestination;