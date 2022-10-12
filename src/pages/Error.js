import React from "react";
import {Link} from 'react-router-dom';
let Error =()=>{
   
  return <section class="section about-section error-page">
              <div className="error-container">   
               <h2 className="section-title">Oh sorry, You've entered a wrong address!</h2>
             
<Link to='/' className="btn btn-primary">Back To Home</Link>
</div>
  </section> 

}

export default Error;