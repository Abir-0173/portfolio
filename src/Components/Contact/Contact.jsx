import React from 'react'
import './contact.css'
import mail from '../../assets/Email.png'
import phone from '../../assets/phone.svg'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f4d224a4-faa1-4435-a007-151e2820cfed");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Successfully Send");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Let's connect & create something awesome together.</h3>
                <p>Feel free to reach out using the contact form below, or find my contact details listed as well. Whether you have a question, a project idea, or just want to say hi — I'd love to hear from you!</p>
                <p>Your feedback, questions, and suggestions are always important to me.</p>
                <ul>
                    <li><img src={mail} alt="" /><a href="mailto:tanimur196@gmail.com">tanimur196@gmail.com</a></li>
                    <li><img src={phone} alt="" /><a href="tel:+8801639168368">+880 1639-168368</a></li> 
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' required/>
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                    <label>Write your message here</label>
                    <textarea name='message' rows="6" placeholder='Enter your message' required></textarea>
                    <button type="submit" className='btn dark-btn'>Submit Now</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact