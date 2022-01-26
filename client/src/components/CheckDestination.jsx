import React, { useState, useEffect } from 'react';

const CheckDestination = (props) => {

  const [reports, setReports] = useState([]);

  useEffect(() => {
    console.log('Yep it works')
  }, [props.longitude, props.latitude])

  return( //Checks for supernatural reports on the path to location
    <div>

    </div>
  )
}

export default CheckDestination;