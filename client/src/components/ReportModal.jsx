import React, { useState, useEffect } from 'react';
import { Modal, Container, Button } from 'react-bootstrap';

const ReportModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div className="r_report" key={props.index} onClick={() => {handleShow()}}>
      <div className="r_title">Site:</div>
      <div className="r_site">{props.report.location}</div>
      <div className="r_title">Location:</div>
      <div className="r_location">{props.report.city + ', ' + props.report.state_abbrev + ' ' + props.report.country + ' Coordinates: Lon ' + (props.report.longitude ? Math.trunc(props.report.longitude) : Math.trunc(props.report.city_longitude))  + ', Lat ' + (props.report.latitude ? Math.trunc(props.report.latitude) : Math.trunc(props.report.city_latitude))}</div>
      <Modal show={show} dialogClassName="reportModal" scrollable={true} onHide={(e) => {
        handleClose()
      }} key={props.index}>
        <Modal.Header>
          <Modal.Title>TRAVELER BEWARE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <div className="r_title">Site:</div>
            <div className="r_site">{props.report.location}</div>
            <div className="r_title">Location:</div>
            <div className="r_location">{props.report.city + ', ' + props.report.state_abbrev + ' ' + props.report.country}</div>
            <div className="r_title">Location:</div>
            <div className="r_description">{props.report.description}</div>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e) => {
            e.stopPropagation()
            handleClose()
          }}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ReportModal;