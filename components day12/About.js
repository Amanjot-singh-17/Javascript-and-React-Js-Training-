import React from 'react';
import {Link} from 'react-router-dom'
function About(){
    return (
        <div>
            <p> this my about page</p>
            <h2>Learn more about us in the About Page!</h2>
          <Link to="/">Go to Home</Link>

        </div>
    );

}
export default About;