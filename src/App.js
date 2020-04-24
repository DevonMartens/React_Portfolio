import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { BrowserRouter, Route } from 'react-router-dom';
import aboutMe from './components/aboutMe';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header title="Devon Martens" scroll>
            <Navigation>
              <BrowserRouter>
            <Link to="/aboutMe">About Me </Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link> 
                <Link to="/contact">Contact</Link>
                </BrowserRouter>
            </Navigation>
        </Header>
        <Drawer title="More Content">
            <Navigation>
            <BrowserRouter>
            <Link to="/aboutMe">About Me </Link>
                <Link to="/projects">Projects</Link>
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
 