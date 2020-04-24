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
 
   <div className="row">
       <div className="col-3" style={{  
         background: 'url(https://i.pinimg.com/originals/db/03/96/db039626bfa2ecc53f0f6e7f335aef4c.gif)',
         backgroundRepeat: 'none',
         }}>
             <Container>
          <img src={headShot} atl="devon"></img>
          </Container>
          </div>
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