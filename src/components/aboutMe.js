import React, { Component } from  'react';
import ChartsPage from './skillsGraph';
import { Layout } from 'react-mdl';
import { Card, Container, Jumbotron } from 'react-bootstrap';
import AnimatedTypingComponent from './typing';
import headShot from '../images/0.jpg';
import { MDBBtn } from 'mdbreact';

class aboutMe extends Component {
    render() {
    return(
        <Jumbotron  style={{ background: 'url(https://pix10.agoda.net/geo/city/2045/1_2045_02.jpg?s=1920x822)'}}>
        <Container>
 
<div className="row">
       <div className="col-3">
             <Container >
           
          <img  className="img-fluid rounded-circle hoverable" style ={{opacity: 8 }}src={headShot} atl="devon"></img>
          </Container>
          </div>
          </div> 
          <div className="col-5">
            <div><MDBBtn>My Story</MDBBtn><MDBBtn>Me a Programmer</MDBBtn></div>
            <div> <MDBBtn>Me a Person</MDBBtn><MDBBtn>Learn more</MDBBtn> </div>
</div>
              
              <div className="row">
              <div className="col-12 ">
        <h3 className="mt-5">Devon's Coding Abilities</h3> 
       
      
        <Card>
        <AnimatedTypingComponent></AnimatedTypingComponent>
       
       
   <ChartsPage>
  
   </ChartsPage>
   </Card>
   </div> 
   </div> 
   
   </Container>
</Jumbotron>

    )
    }
    
}
    
export default aboutMe;