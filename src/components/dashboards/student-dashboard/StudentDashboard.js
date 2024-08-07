import React from 'react'
import StudentSidebar from '../../sharedComponents/StudentSidebar'
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../../Navbar';
import StudentHeader from '../../sharedComponents/StudentHeader';
import { Route, Switch } from "react-router";
import EditProfile from './EditProfile';
const StudentDashboard = () => {
  return (
    <div>
         <div>
          <StudentHeader/>
         </div>
      <Row>
        <Col  className='col-4 col-md-3 col-xl-2'>
         <StudentSidebar/>
        </Col>
        <Col md={9} className="content-col">
        <Switch>
        <Route path="/edit-profile" component={EditProfile}></Route>
        </Switch>
        </Col>
      </Row>
    </div>
  )
}

export default StudentDashboard