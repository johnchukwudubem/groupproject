import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='foot'>
      <footer >
  
  <div className="top">
    <div className="first-footer">
      <img
        src="./assests/img/images-removebg-preview.png"
        width="70px"
        alt="Algorithmia SE logo"
      />
      <p>
        Algorithmia SE 🌍 represents an inspiring convergence of innovation,
        collaboration, and transformation impact. It illuminates the path
        for ALX Software Engineering students, and the wider tech community,
        fostering a culture of continuous learning, problem-solving, and
        positive change.
      </p>
      
      <p className="number"><a href="tel:+2348139720259">+234-81-3972-0259</a><br/>
      
        {/* <a href="mailto:algorithmiasecollaborators@gmail.com"
          >algorithmiasecollaborators@gmail.com</a
        > */}
      </p>
    </div>

    <div className="right">
      <h3>Quick Links</h3>
      <div className="links">
      <ul style={{listStyleType:'none'}}>
          <li><a href="./index.html">Home</a></li>
          <li><a href="./events.html">Events</a></li>
          <li><a href="#Contact_us">Contact Us</a></li>
        </ul>

        <ul style={{listStyleType:'none'}}>
          <li><a href="#About_us">About Us</a></li>
          <li><a href="./projects.html">Projects</a></li>
          <li><a href="./blogs.html">Blogs</a></li>
        </ul>
      </div>
    </div>
  </div>

  <hr />

  <div className="under">
    <ul style={{listStyle:'none'}}>
      <li>
        <a href="https://github.com/ALX-SE-Algorithmia" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://twitter.com/Algorithmia_SE" target="_blank">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/algorithmia-se-0743b9283/"
          target="_blank"
        >
        <i className="fa-brands fa-linkedin"></i>
        
      
          <i className="fa-brands fa-discord"></i>
        
     
        <i className="fa-brands fa-whatsapp"></i>
      
        <i className="fa-solid fa-envelope"></i>
        
          
 
<i className="fa-brands fa-youtube"></i>
        </a>
      </li>
    </ul>
    <div className="footer_product">
      A product of
    
    </div>
    <div className="pic">
      <img
      src="./assests/img/images-removebg-preview.png"
      width="40px"
      alt="Algorithmia SE logo"
    />
    </div>
    <div className="copyright">
      &copy; 2023 Algorithmia SE 🌍. All Rights Reserved
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
