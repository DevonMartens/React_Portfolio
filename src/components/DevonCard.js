import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import headShot from '../images/0.jpg';
import AnimatedTypingComponent from './typing';
import fab from  'mdbreact';
import 'mdbreact/dist/css/mdb.css'
const DevonCard = () => {
  return (
    <MDBCard className="m1">
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
      </MDBCardText>

      <MDBCol md='12' className='d-flex justify-content-center'>
       
      </MDBCol>
    </MDBCardBody>
  </MDBCard>
  )
}
export default DevonCard;