import React from "react"
import '../../App.css';
import content from "../../assets/content.JPG" 
 
function CMS(props) {
  return (
    <div>
      <h1 className="display-1">Content Management System</h1>
       <dl className="row">
          <dt className="col-sm-3">Description</dt>
          <dd className="col-sm-9">A content and user management system</dd>
          
          <dt className="col-sm-3">Tech Used:</dt>
          <dd className="col-sm-9">Postgres, Express, Node and React.  Tested in the React testing library and Jest.  Styled in css</dd>

          <dt className="col-sm-3">Link to Github Repo </dt>
          <dd className="col-sm-9"><a href="https://github.com/dm-devtech/content-management">Here</a></dd>

          <dt className="col-sm-3">Screenshot </dt>
          <dd className="center"><img src={content} /></dd>

        </dl>
        <br/>
      <p className="h6" >David Millen 2021</p>
    </div>
  )
}
 
export default CMS;