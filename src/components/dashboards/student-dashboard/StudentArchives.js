import React from "react";
import StudentHeader from "../../sharedComponents/StudentHeader";
import { Container, Row, Col } from "react-bootstrap";
import StudentSidebar from "../../sharedComponents/StudentSidebar";
const StudentArchives = () => {
  return (
    <>
      <StudentHeader />
      <Row>
        <Col className="col-4 col-md-3 col-xl-2">
          <StudentSidebar />
        </Col>
        <Col md={9} className="content-col">
          Parental Watch
        </Col>
      </Row>
    </>
  );
};

export default StudentArchives;
