import React from "react"
import '../../App.css';
import language from "../../assets/language-lighthouse.JPG" 
 
function LanguageLighthouse(props) {
  return (
    <div>
      <h1 class="display-1">Language Lighthouse</h1>
        <dl class="row">
          <dt class="col-sm-3">Description</dt>
          <dd class="col-sm-9">An app where you can learn nouns and verbs in French, German and Latin</dd>
          
          <dt class="col-sm-3">Tech Used:</dt>
          <dd class="col-sm-9">Postgres, Express, Node and React.  React, React testing library, styled in css</dd>
          
          <dt class="col-sm-3">Hosted on Heroku here: </dt>
          <dd class="col-sm-9"><a href="https://language-lighthouse.herokuapp.com/">Here</a></dd>

          <dt class="col-sm-3">Link to Github Repo </dt>
          <dd class="col-sm-9"><a href="https://github.com/dm-devtech/language-lighthouse">Here</a></dd>

          <dt class="col-sm-3">Screenshot </dt>
          <dd class="center"><img src={language} /></dd>

        </dl>
        <p className="h6" >David Millen 2021</p>
    </div>
  )
}
 
export default LanguageLighthouse;