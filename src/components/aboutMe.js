import React, { Component } from  'react';
import ChartsPage from './skillsGraph';
import { Layout } from 'react-mdl';
import { Card, Container, Jumbotron } from 'react-bootstrap';
import AnimatedTypingComponent from './typing';
import headShot from '../images/0.jpg';

class aboutMe extends Component {
    render() {
    return(
      
                
        <Jumbotron  style={{ background: 'url(https://pix10.agoda.net/geo/city/2045/1_2045_02.jpg?s=1920x822)'}}>
        <Container>
 
   <div>
          <img src={headShot} atl="devon"></img>
        <h3 className="mt-5">Devon's Coding Abilities</h3> 
        </div> 
        <Card>
        <AnimatedTypingComponent></AnimatedTypingComponent>
       
       
   <ChartsPage>
  
   </ChartsPage>
   </Card>
   </Container>
</Jumbotron>
    )
    }
    
}
    
export default aboutMe;