import React from "react"
import '../../App.css';
import baseball from "../../assets/baseball2.JPG" 
 
function BaseballScorecard(props) {
  return (
    <div>
      <h1 className="display-1">Baseball Scorecard</h1>
        <dl className="row">
          <dt className="col-sm-3">Description</dt>
          <dd className="col-sm-9">An interactive baseball scorecard</dd>
          
          <dt className="col-sm-3">Tech Used:</dt>
          <dd className="col-sm-9">React, React testing library, styling in css</dd>
          
          <dt className="col-sm-3">Hosted on Heroku here: </dt>
          <dd className="col-sm-9"><a href="https://baseball-scorecard.herokuapp.com/">Here</a></dd>

          <dt className="col-sm-3">Link to Github Repo </dt>
          <dd className="col-sm-9"><a href="https://github.com/dm-devtech/Baseball-Scorecard_ReactApp">Here</a></dd>
          <img  src={baseball} />
        </dl>
          <p className="h5" >David Millen 2021</p>
    </div>
  )
}
 
export default BaseballScorecard;