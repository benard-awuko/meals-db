import React from "react";

let Footer = ()=>{
return<footer>
                    <p className="footer-p">
        &copy; {new Date().getFullYear()} <span className="date"></span> Meals' Database | Designed and Developed By <a href="https://ug.linkedin.com/in/benard-awuko-b20591a3" target="_blank" className="footer-link" rel="noopener noreferrer">Benard Awuko</a>
        
      </p>
       </footer>
}

export default Footer;