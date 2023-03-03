import React, { useRef, useState } from "react";
import "./join.scss";
import emailjs from '@emailjs/browser'


const Join = () => {
    const [input, setInput] = useState({
        name: '',
        email: ''
    })

    const handleInput=(e)=>{
        setInput(e.target.value)
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setInput("")
    
        emailjs.sendForm('service_niopf8b', 'template_g5w4n72', form.current, 's9hM6lcBk0r-nakHs')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        };
        
  return (
    <div className="join" id="join-us">
      <div className="j-left">
      <hr />
        <div>
          <span className="strokeText">ready to</span>
          <span>level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="strokeText">with us</span>
        </div>
      </div>

      <div className="j-right">
        <form ref={form} className="form-container" onSubmit={sendEmail}>
            <input type="text" value={input.name} name="user_name" placeholder="Enter your name" onChange={handleInput}/>
            <input type="email" value={input.email} name="user_email" placeholder="Enter your email address" onChange={handleInput}/>

            <button type="submit" className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
