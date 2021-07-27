import React from 'react'; 
import {BrowserRouter, Route, Link} from 'react-router-dom';
import '../App.css';
import Card from "react-bootstrap/Card";


const Thumbnail = (props) => (

      <Card style={{ width: '18rem', height: '22rem' }}>
        <Card.Img src={props.image} />
        <Card.Body>
          <Card.Title className="h4">{props.title}</Card.Title>
          <Card.Text className="lead">
              {props.category}
          </Card.Text>
        </Card.Body>
        <div className="center">
          <Card.Link href={props.link}>Further Info</Card.Link>
          <Card.Link href={props.hostedLink}>Hosted here</Card.Link>
        </div>
        </Card>


  );


export default Thumbnail;