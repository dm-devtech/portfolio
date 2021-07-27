import React from "react"
import '../../App.css';
 
function CMS(props) {
  return (
    <div>
      <h1 class="display-1">Content Management System</h1>
       <dl class="row">
        <dt class="col-sm-3">Description</dt>
        <dd class="col-sm-9">A content and user management system</dd>
         
        <dt class="col-sm-3">Tech Used:</dt>
        <dd class="col-sm-9">Postgres, Express, Node and React.  Tested in the React testing library and Jest.  Styled in css</dd>

        <dt class="col-sm-3">Link to Github Repo </dt>
        <dd class="col-sm-9"><a href="https://github.com/dm-devtech/content-management">Here</a></dd>

         </dl>
        <div className="lead">
         Screenshots
        </div>
        <br/>
      <p className="h6" >David Millen 2021</p>
    </div>
  )
}
 
export default CMS;