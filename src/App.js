import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { BrowserRouter, Router } from 'react-router-dom';
import aboutMe from './components/aboutMe';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout claseName="Page" style={{
      background: 'url(https://pix10.agoda.net/geo/city/2045/1_2045_02.jpg?s=1920x822)', 
      }}>
        <Header title="Devon Martens" scroll>
            <Navigation>
              <BrowserRouter>
            <Link to="/aboutMe">About Me </Link>
                <Link to="/project">Projects</Link>
                <Link to="/resume">Resume</Link> 
                <Link to="/contact">Contact</Link>
                </BrowserRouter>
            </Navigation>
        </Header>
        <Drawer title="More Content">
            <Navigation>
            <BrowserRouter>
            <Link to="/aboutMe">About Me </Link>
                <Link to="/project">Projects</Link>
                <Link to="/resume">Resume</Link> 
                <Link to="/contact">Contact</Link>
                </BrowserRouter>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main></Main>
        </Content>
    </Layout>
</div>
  );
}

export default App;
 