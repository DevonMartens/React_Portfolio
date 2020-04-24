import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Projects from './projects';
import LandingPage from './landingPage';
import ChartsPage from './skillsGraph';
import aboutMe from './aboutMe';
import Resume from './resume';
import Contact from './contact';


const Main = () => (
    <BrowserRouter>
    <Switch>
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/" component={Resume} />
    <Route exact path="/aboutMe" component={aboutMe} />
    <Route exact path="/projects" component={Projects} />
        {/* <Route exact path="/" component={Projects} /> */}
       

        </Switch>
        </BrowserRouter>
)
    
export default Main;