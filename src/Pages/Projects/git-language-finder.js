import React from "react"
import '../../App.css';
 
function GitLanguageFinder(props) {
  return (
    <div>
      <h1 class="display-1">Git Language Finder</h1>
       <dl class="row">
        <dt class="col-sm-3">Description</dt>
        <dd class="col-sm-9">An app that calculates a github user's most used programming language across all their public repos</dd>
         
        <dt class="col-sm-3">Tech Used:</dt>
        <dd class="col-sm-9">React, React testing library, styled in css</dd>
         
        <dt class="col-sm-3">Hosted on Netlify here: </dt>
        <dd class="col-sm-9"><a href="https://git-language-finder.netlify.app/">Here</a></dd>

        <dt class="col-sm-3">Link to Github Repo </dt>
        <dd class="col-sm-9"><a href="https://github.com/dm-devtech/git-language-finder">Here</a></dd>

         </dl>
    </div>
  )
}
 
export default GitLanguageFinder;