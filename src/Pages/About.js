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
        <ul>Skills:
          <li>React, Svelte, Typescript, Vue js, Javascript, Node, Express</li>
          <li>Ruby, Rails, Sinatra</li>
          <li>RSpec, Minitest, Capybara, Jest, Cypress, React Testing Library </li>
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
        <br/>
          <p className="h6" >David Millen 2025</p>
    </div>
  )
}
 
export default About;
