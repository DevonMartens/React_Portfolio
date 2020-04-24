import React, { Component } from  'react';

import { MDBBtn, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import 'mdbreact/dist/css/mdb.css'


class Projects extends Component {
    render() {
    return (

          <MDBContainer>
             <h5>There are 4 Projects</h5>
            <MDBCarousel
            activeItem={1}
            length={4}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://img.cinemablend.com/filter:scale/quill/a/4/d/1/e/f/a4d1ef8a005bc5a618fe28d563600b485ba7f473.jpg?fw=1200"
                    alt="First slide"
                  />
                <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Friend Finder</h3>
                  <p>A NodeJS app with Express Servers and Jquery</p>
                 <span><MDBBtn  gradient="peach">View Code</MDBBtn><MDBBtn  gradient="blue">View Live APP</MDBBtn></span> 
                  <p>Find out the answer to who should be your friend. Life's greatest mystery!</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://steamcdn-a.akamaihd.net/steam/apps/628570/header.jpg?t=1532519256"
                    alt="Second slide"
                  />
                <MDBMask overlay="black-strong" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Jquery Trivia Game</h3>
                  <span><MDBBtn  gradient="peach">View Code</MDBBtn><MDBBtn  gradient="blue">View Live APP</MDBBtn></span>
                  <p>One of my first apps. Demonstrates my problem soling abilities and Jquery abilities.</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://glhtainplano.files.wordpress.com/2015/06/extra-extra.png"
                    alt="Third slide"
                  />
                <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">New York Times</h3>
                  <span><MDBBtn  gradient="peach">View Code</MDBBtn><MDBBtn  gradient="blue">View Live APP</MDBBtn></span>
                  <p>Web Scraping with Mongo</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="4">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://newmediarockstars.com/wp-content/uploads/2013/03/spotify-1.jpg"
                    alt="Third slide"
                  />
                <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Spotify API</h3>
                  <span><MDBBtn  gradient="peach">View Code</MDBBtn><MDBBtn  gradient="blue">View Live APP</MDBBtn></span>
                  <p>Built with NodeJS</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
          </MDBContainer>

        );
      }
  
      }

    
export default Projects;