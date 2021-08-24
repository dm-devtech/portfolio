import React from "react"
import '../../App.css';
import baseball from "../../assets/baseball.JPG" 
 
function BaseballScorecard(props) {
  return (
    <div>
      <h1 class="display-1">Baseball Scorecard</h1>
        <dl class="row">
          <dt class="col-sm-3">Description</dt>
          <dd class="col-sm-9">An interactive baseball scorecard</dd>
          
          <dt class="col-sm-3">Tech Used:</dt>
          <dd class="col-sm-9">React, React testing library, styling in css</dd>
          
          <dt class="col-sm-3">Hosted on Heroku here: </dt>
          <dd class="col-sm-9"><a href="https://baseball-scorecard.herokuapp.com/">Here</a></dd>

          <dt class="col-sm-3">Link to Github Repo </dt>
          <dd class="col-sm-9"><a href="https://github.com/dm-devtech/Baseball-Scorecard_ReactApp">Here</a></dd>
          <img  src={baseball} />
        </dl>
          <p className="h5" >David Millen 2021</p>
    </div>
  )
}
 
export default BaseballScorecard;