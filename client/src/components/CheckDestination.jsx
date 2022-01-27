import React, { useState, useEffect } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const CheckDestination = (props) => {

  const [reports, setReports] = useState([]);

  useEffect(() => {
    setReports(props.reports);
  }, [props.longitude, props.latitude])

  return( //Checks for supernatural reports on the path to location
    <div>
      <div id="map"></div>
      {props.reports.map((report, index) => {
        return (
          <div key={index}>
            <div className="r_title">Site:</div>
            <div className="r_site">{report.location}</div>
            <div className="r_title">Location:</div>
            <div className="r_location">{report.city + ', ' + report.state_abbrev + ' ' + report.country}</div>
            <div className="r_title">Report:</div>
            <div className="r_description">{report.description}</div>
          </div>
        )
      })}
    </div>
  )
}

export default CheckDestination;