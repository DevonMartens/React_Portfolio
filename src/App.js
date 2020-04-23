import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(https://cdn2.atlantamagazine.com/wp-content/uploads/sites/4/2020/03/atlantablue_getty.jpg) center / cover'}}>
        <Header transparent title="Devon Martens" style={{color: 'white'}}>
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
        <Content />
    </Layout>
    <Content>
    <Main> </Main>
    <Main> </Main>
    </Content>
  
 
</div>
  );
}

export default App;
 