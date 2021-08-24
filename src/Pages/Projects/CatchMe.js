import React from "react"
import '../../App.css';
import catchme from "../../assets/CatchMeHome.png" 
 
function CatchMe(props) {
  return (
    <div>
      <h1 class="display-1">CatchMe</h1>
       <dl class="row">
        <dt class="col-sm-3">Description</dt>
          <dd class="col-sm-9">A multiplayer game where friends can race each other in races of various distances. Built as the final project during the Makers course.</dd>
          
          <dt class="col-sm-3">Tech Used:</dt>
          <dd class="col-sm-9">React, Postgres, Sequelize, GraphQL, Jest, Cypress</dd>
          
          <dt class="col-sm-3">Hosted on Heroku here: </dt>
          <dd class="col-sm-9"><a href="https://appcatchme.herokuapp.com/">Here</a></dd>

          <dt class="col-sm-3">Link to Github Repo </dt>
          <dd class="col-sm-9"><a href="https://github.com/dm-devtech/catchme-web">Here</a></dd>

          <dt class="col-sm-3">Screenshot </dt>
          <dd class="center"><img src={catchme} /></dd>

        </dl>
          <div className="lead">
          Demonstration video
          <div className="video">
          <iframe width="560" height="315" src='https://www.youtube.com/embed/2YuvLhf_QO8'
              frameborder='0'
              allow='autoplay; encrypted-media'
              allowfullscreen
              title='catchme'
            />
            </div>
          </div>
            <p className="h6" >David Millen 2021</p>
    </div>
  )
}
 
export default CatchMe;