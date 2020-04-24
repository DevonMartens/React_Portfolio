import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css'

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header title="Devon Martens" scroll>
            <Navigation>
              <BrowserRouter>
            <Link className="text-light m-1" to="/aboutMe">About Me </Link>
                <Link className="text-light m-1" to="/projects">Projects</Link>
                <Link className="text-light m-1" to="/resume">Resume</Link> 
                <Link className="text-light m-1" to="/contact">Contact</Link>
                </BrowserRouter>
            </Navigation>
        </Header>
        <Drawer title="More Content">
            <Navigation>
            <BrowserRouter>
            <Link className="text-dark text-center" to="/aboutMe">About Me </Link>
                <Link className="text-dark text-center" to="/projects">Projects</Link>
                <Link className="text-dark text-center" to="/resume">Resume</Link> 
                <Link className="text-dark text-center" to="/contact">Contact</Link>
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
 