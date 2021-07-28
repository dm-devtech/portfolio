import React from "react"
 
function About(props) {
  return (
    <div >
      <h1 class="display-1">Profile</h1>
      <h2>David Millen
        <br/>
      <small class="text-muted">Software Developer</small></h2>
      <div class="center"> 
      <div class="lead">       
        <ul>Experience with:
          <li>Javascript, Node, Express, React, Jasmine, Jest, Cypress, React Testing Library</li>
          <li>Ruby, Rails, Sinatra, RSpec, Capybara </li>
          <li>SQL, PostgreSQL</li>
          <li>TDD, OOP, Agile development, CI/CD (Travis, Netlify)</li>
        <br/>
          Previous career in finance 2016-2020 and marketing 2011-2015.  Makers Academy Graduate 2020.
        </ul>
      </div>
    </div>
        <a type="button" class="btn btn-outline-dark" href="https://github.com/dm-devtech/">Github</a>
        <a type="button" class="btn btn-outline-dark" href="https://github.com/dm-devtech/CV">Github CV</a>
        <a type="button" class="btn btn-outline-dark" href="https://www.youtube.com/channel/UCbQF2qjxHuIfBEkXYScRLLw/videos">Youtube</a>
        <br/>
          <p className="h6" >David Millen 2021</p>
    </div>
  )
}
 
export default About;