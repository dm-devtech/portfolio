import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Pages/Projects.js'; 
import Blog from './Pages/Blog.js'; 
import About from './Pages/About.js'; 
import GitLanguageFinder from './Pages/Projects/git-language-finder.js'; 
import LanguageLighthouse from './Pages/Projects/language-lighthouse.js'; 
import Cms from './Pages/Projects/cms.js'; 
import CatchMe from './Pages/Projects/CatchMe.js'; 
import NoMatch from './Pages/NoMatch.js';
import './App.css';
import Layout from './Pages/Layout.js'
import NavigationBar from './Pages/NavigationBar.js'
import Jumbotron from './Pages/Jumbotron.js'
 
const App = () => (
  <React.Fragment>
    <NavigationBar/>
    <Jumbotron/>
  <Layout>
    <BrowserRouter>
      <div className="App">
  
        <Route exact path="/portfolio" component={Projects} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
        <Route path="/git-language-finder" component={GitLanguageFinder} />
        <Route path="/language-lighthouse" component={LanguageLighthouse} />
        <Route path="/cms" component={Cms} />
        <Route path="/CatchMe" component={CatchMe} />
  
      </div>
    </BrowserRouter>
    </Layout>
    </React.Fragment>
  );

export default App