import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { BrowserRouter } from 'react-router-dom';
import aboutMe from './components/aboutMe';

function App() {
  return (
    <div className="demo-big-content">
    <Layout claseName="Page" style={{
      background: 'url(https://pix10.agoda.net/geo/city/2045/1_2045_02.jpg?s=1920x822)', 
      }}>
        <Header title="Devon Martens" scroll>
            <Navigation>
            <a href={aboutMe}>About Me</a>
                <a href="#">Projects</a>
                <a href="#">Resume</a> 
                <a href="#">Contact</a>
            </Navigation>
        </Header>
        <Drawer title="More Content">
            <Navigation>
            <a href="#">About Me</a>
                <a href="#">Projects</a>
                <a href="#">Resume</a>
                <a href="#">Contact</a>
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
 