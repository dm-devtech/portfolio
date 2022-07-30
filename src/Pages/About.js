import React from "react"

function About(props) {
  return (
    <div >
      <h1 className="display-1">Profile</h1>
      <h2>David Millen
        <br/>
      <small className="text-muted">Full stack Developer</small></h2>
      <div className="center">
      <div className="lead">
        <ul>Experience with:
          <li>Javascript, Node, Express, React, Jasmine, Jest, Cypress, React Testing Library</li>
          <li>Ruby, Rails, Sinatra, RSpec/Minitest, Capybara </li>
          <li>SQL, PostgreSQL</li>
          <li>TDD, OOP, Agile development, CI/CD (Travis, Netlify, Heroku)</li>
        <br/>
          Currently working in EdTech.
          Previous career in finance and marketing.  Makers Academy Graduate 2020.
        </ul>
      </div>
    </div>
        <a type="button" className="btn btn-outline-dark" href="https://github.com/dm-devtech/">Github</a>
        <a type="button" className="btn btn-outline-dark" href="https://github.com/dm-devtech/CV">Github CV</a>
        <a type="button" className="btn btn-outline-dark" href="https://www.youtube.com/channel/UCbQF2qjxHuIfBEkXYScRLLw/videos">Youtube</a>
        <br/>
          <p className="h6" >David Millen 2022</p>
    </div>
  )
}
 
export default About;