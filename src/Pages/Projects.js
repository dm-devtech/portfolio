import React from "react"
import Thumbnail from './Thumbnail.js';
import '../App.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container }  from "react-bootstrap";
import catchMe from "../assets/catchme.JPG"
import gitFinder from "../assets/git-finder.JPG"
import language from "../assets/language-lighthouse.JPG"
import content from "../assets/content.JPG" 
import baseball from "../assets/baseball.JPG" 

const Projects = () => (
    <div >
      <h1 class="display-1">Projects</h1>
   <div >
   <h2 class="lead">Here are some projects I have developed recently</h2>
      <Container className="center">
        <Row className="mt-1">
          <Col lg="auto" >
          <Row className="center">
          <Col md="auto" >
          <div className="mt-1"> 
            <Thumbnail
              link="/language-lighthouse"
              image={language}
              title="Language Lighthouse"
              category="Learn French, German or Latin nouns and verbs"
              hostedLink="https://language-lighthouse.herokuapp.com/"
            />
             </div>
            </Col>
           
         <Col md="auto">
         <div  className="mt-1">
              <Thumbnail
                link="/git-language-finder"
                image={gitFinder}
                title="Git Language Calculator"
                category="Find a Github User's most used programming language"
                hostedLink="https://git-language-finder.netlify.app/"
              />
               </div>
              </Col>
              
              <Col md="auto">
              <div className="mt-1">
              <Thumbnail
                link="/CatchMe"
                image={catchMe}
                title="CatchMe"
                category="A multiplayer sprint racing game built in React"
                hostedLink="https://appcatchme.herokuapp.com/"
              />  
              </div>
            </Col>
            

            <Col md="auto">
            <div  className="mt-1">
             <Thumbnail
                link="/cms"
                image={content}
                title="Content Management System"
                category="A content management system built with the PERN stack"
              />
              </div>
            </Col>

            <Col md="auto">
            <div  className="mt-1">
             <Thumbnail
                link="/bowling-scorecard"
                image={baseball}
                title="Bowling Scorecard"
                category="An interactive bowling scorecard built in React"
                hostedLink="https://baseball-scorecard.herokuapp.com/"
              />
              </div>
            </Col>
            
            </Row>
            </Col>
        </Row>
      </Container>
      </div>
      <br/>
          <p className="h6" >David Millen 2021</p>
</div>
  )
 
export default Projects;