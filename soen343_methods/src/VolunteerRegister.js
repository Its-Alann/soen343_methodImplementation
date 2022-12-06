import React from 'react'
import VRForm from './VRForm'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

export const VolunteerRegister = () => {
  return (
    <div>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>Volunteer Registration Page</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h3>Sign Up Today!</h3> 
        </Col>
      </Row>
      <VRForm/>
    </div>
  )
}
