import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const MiddleForm = () => {
    const[onsubmit, setOnsubmit] = useState(false);
    useEffect(() => {
        AOS.init();
    })

  return (
    <section>
     <div className="top-message" data-aos="zoom-out-up">
     <p>Welcome to my portfolio! Stay connected by reaching out through the contact form. Share your thoughts, inquiries, or collaboration ideas with ease. Your message is valuable, and I'm here to listen.</p>
     </div>
     <div className="form">
        <form>
            <div className="headings"><h3>Enter valid information *</h3></div>
            <div className="groups">
                <div className="form-group">
                    <span>Your Full Name</span>
                    <input type='text' placeholder='Eg: Michael Douglas'/>
                </div>
                <div className="form-group">
                    <span>Email Address</span>
                    <input type='text' placeholder='Eg: Michael Douglas'/>
                </div>
            </div>
            <div className="form-group">
                <span>Subject</span>
                <input type='text' placeholder='Eg: Michael Douglas'/>
            </div>
            <div className="form-group">
                <span>Your message</span>
                <textarea placeholder='Enter your message here...'/>
            </div>
           {onsubmit && <div className="form-group">
                <button onClick={() => setOnsubmit()}>Send Message</button>
            </div>}
        </form>
     </div>
     <div className="notice">
        <p><span>Note:&nbsp;</span>To send the message you must fill all the infomation to enable the submit button.</p>
     </div>
    </section>
  )
}

export default MiddleForm
