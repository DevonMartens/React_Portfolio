import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(https://cdn2.atlantamagazine.com/wp-content/uploads/sites/4/2020/03/atlantablue_getty.jpg) center / cover'}}>
        <Header transparent title="Devon Martens" style={{color: 'white'}}>
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a> 
                <a href="#">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
  );
}

export default App;
 