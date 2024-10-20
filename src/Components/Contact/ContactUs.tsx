import React from 'react'
import img1 from '../../assets/img/ddd-removebg-preview.png'
import './ContactUs.css'
const ContactUs = () => {
  return (
    <div className='main-div'>
      bnfbfvvvnvnb
      <div className='contact-div'>
      <h1 className="cont">Contact      <span style={{color: 'orange'}}>Us</span>     </h1>
      <p> Ready to build real-life solutions as ALX SE students <br/> collaboratively? <br/>
      Reach out to us </p>
      </div>

      <div className='main'>
      <div className="form">
           <div className="inner-form">
            <div className="contact-details">
                <div className="name">
                  <div className="first-name">
                    <label>First name</label> <br />
                    <input
                      type="text"
                      id="firstname"
                      className="input1"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="last-name">
                    <label>Last name</label> <br />
                    <input
                      type="text"
                      id="lastname"
                      className="input1"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
      
                <div className="contact">
                  <div className="email">
                    <label>Email</label> <br />
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                      name="email"
                      required
                    />
                  </div>
                  <div className="number">
                    <label>Phone  <span className="n">number</span></label> <br />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                    />
                    {/* <!--  pattern="[0-9]{20}" --> */}
                  </div>
                </div>
              </div>
      
              <div className="input-text">
                <label>What would you like to tell us</label>
                <textarea 
                  name="message"
                  id="message"
                  placeholder="Drop a message..."
                  // cols="62%"
                  // rows="7%"
                  required
                ></textarea>
              </div>
      
              <button className="button">Send Message</button>
           </div>
            
          </div>
    </div>
      

    <div className='maind'>
       <div className="">
            <div className="subscribe-container">
              <img src={img1} style={{width: '80px' }} />
              <h2>Subscribe to Our Newsletter</h2>
              <h1>Subscribe to our newsletter and join our community of innovators</h1>
        
      <button className="subbutton">Subscribe</button>
              
            </div>
           </div>
    </div>
{/* form */}

            
      </div>
  )
}

export default ContactUs;
