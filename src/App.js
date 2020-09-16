import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button } from 'react-bootstrap'


function App() {
  return (
<div className="containers">
  <Container className="text-center">
    <div className="header">
    <img src={`${process.env.PUBLIC_URL}/mhs.png`} style={{width:'300px'}} alt="header" />

    </div>
    < br />
    <Row className="justify-content-center">
    <Col lg={6} style={{color: 'white', fontWeight:'400' }}>
      Formerly known as Hawaiian Punch Dude, I am now adding a little spice to the gaming community! I am an average gamer from Maimi, just here to have some fun playing some games and chatting with the community!
    </Col>
    
    </Row>
    <div className="social">
    <Row className="justify-content-center">
      <a href="https://www.facebook.com/MrHawaiianSpice">
    <Button variant="outline-light" size="lg" style={{width:'300px'}}>
  <img src={`${process.env.PUBLIC_URL}/fb.png`}style={{height:'20px'}} alt="fb"/>{'  '}Connect with Facebook
    </Button>
    </a>

    </Row>
    <Row className="justify-content-center" style={{marginTop:'25px', paddingBottom:'25px'}}>
<a href="https://twitter.com/MrHawaiianSpice">
    <Button variant="outline-light" size="lg" style={{width:'300px', marginBottom:'25%'}}>
  <img src={`${process.env.PUBLIC_URL}/twitter.png`}style={{height:'20px', marginRight:'5px'}} alt="twitter"/>{'    '} Follow on Twitter
    </Button>
    </a>
    </Row>

    <Row className="justify-content-center"><img src={`${process.env.PUBLIC_URL}/trees.png`} style={{height:'100px'}} alt="footer"></img><br />

</Row> 
    </div>

  </Container>

</div>
  );
}

export default App;
