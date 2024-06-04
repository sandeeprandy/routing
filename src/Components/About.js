import React from "react" 
import {Link} from "react-router-dom"
import { Button } from "antd"

function About() {
  return (
  <div>
    <h1>this is about page</h1> 
    <Button color="primary"  > <Link to="/"> home page </Link>  </Button>
  </div> 
  )
} 
export default About