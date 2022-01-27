import React from 'react';

const Main = (props) => {

  return( //main page shows WELCOME. with button to find supernatural info at your current location
    <div className="mainpage" onClick={() => {
      props.getCoordinates();
      props.newPage('checkdestination');
    }}>Find out what resides nearby</div>
  )
}

export default Main;