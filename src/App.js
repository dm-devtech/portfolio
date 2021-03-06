import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Pages/Projects.js'; 
import Blog from './Pages/Blog.js'; 
import About from './Pages/About.js'; 
import GitLanguageFinder from './Pages/Projects/git-language-finder.js'; 
import LanguageLighthouse from './Pages/Projects/language-lighthouse.js'; 
import Cms from './Pages/Projects/cms.js'; 
import CatchMe from './Pages/Projects/CatchMe.js'; 
import Baseball from './Pages/Projects/baseball-scorecard.js'; 
import './App.css';
import Layout from './Pages/Layout.js'
import NavigationBar from './Pages/NavigationBar.js'
import Jumbotron from './Pages/Jumbotron.js'
 
const App = () => (
  <React.Fragment>
    <NavigationBar/>
    <Jumbotron className="jumbotron jumbotron-fluid"/>
  <Layout>
    <BrowserRouter>
      <div className="App">
  
        <Route exact path="/" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/git-language-finder" component={GitLanguageFinder} />
        <Route path="/language-lighthouse" component={LanguageLighthouse} />
        <Route path="/cms" component={Cms} />
        <Route path="/CatchMe" component={CatchMe} />
        <Route path="/baseball-scorecard" component={Baseball} />
  
      </div>
    </BrowserRouter>
    </Layout>
    </React.Fragment>
  );

export default App