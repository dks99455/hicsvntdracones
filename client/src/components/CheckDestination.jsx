import React, { useState, useEffect } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import ReportModal from './ReportModal.jsx';

const CheckDestination = (props) => {

  const [reports, setReports] = useState([]);
  const [field, setField] = useState('');


  useEffect(() => {
    setReports(props.reports);
  }, [props.longitude, props.latitude])

  return( //Checks for supernatural reports on the path to location
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <input className="enteraddress" type="text" placeholder="Enter an address or coordinates" onChange={(e) => {setField(e.target.value)}}></input>
        <button type="submit">SUBMIT</button>
      </form>
      <div className='r_title'>Shadows found near coordinates: Longitude:{props.longitude} , Latitude:{props.latitude}</div>
      {props.reports.map((report, index) => (<ReportModal report={report} key={index} index={index} />))}
    </div>
  )
}

export default CheckDestination;