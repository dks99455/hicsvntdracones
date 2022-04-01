import React from 'react';

const Main = (props) => {

  return(
    <div className="mainpage" onClick={() => {
      props.getCoordinates();
      props.newPage('checkdestination');
    }}>Find out what resides nearby</div>
  )
}

export default Main;