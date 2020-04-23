import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header title="Devon Martens" scroll>
            <Navigation>
            <a href="#">About Me</a>
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
 