import './App.css';
import HomePage from './HomePage'
import { VolunteerRegister } from './VolunteerRegister';
import Nav from 'react-bootstrap/Nav';
import { FormValidation } from './FormValidation';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div>

      <Router>
        <Row xs="auto">
          <Col>
            <Nav.Item>
              <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            </Nav.Item>
          </Col>
          <Col>
            <Nav.Item>
              <Nav.Link as={Link} to={'/registerVolunteer'}>Volunteer Center</Nav.Link>
            </Nav.Item>
          </Col>
        </Row>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/registerVolunteer" exact element={<VolunteerRegister/>} />
          <Route path="/formValidation" exact element={<FormValidation/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
