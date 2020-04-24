import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import headShot from '../images/0.jpg';
import AnimatedTypingComponent from './typing';

const DevonCard = () => {
  return (
    <MDBCard>
    <MDBCardImage
      hover
      overlay='white-light'
      className='card-img-top'
      src= {headShot}
      alt='Me'
    />

    <MDBCardBody cascade className='text-center'>
      <MDBCardTitle className='card-title'>
        <strong>Devon Martens</strong>
      </MDBCardTitle>

      <p className='font-weight-bold blue-text'>Wev developer</p>

      <MDBCardText>
       <AnimatedTypingComponent></AnimatedTypingComponent>
      </MDBCardText>

      <MDBCol md='12' className='d-flex justify-content-center'>
        <MDBBtn rounded floating color='fb'>
          <MDBIcon size='lg' fab icon='facebook-f'></MDBIcon>
        </MDBBtn>

        <MDBBtn rounded floating color='tw'>
          <MDBIcon size='lg' fab icon='twitter'></MDBIcon>
        </MDBBtn>

        <MDBBtn rounded floating color='dribbble'>
          <MDBIcon size='lg' fab icon='dribbble'></MDBIcon>
        </MDBBtn>
      </MDBCol>
    </MDBCardBody>
  </MDBCard>
  )
}
export default DevonCard;