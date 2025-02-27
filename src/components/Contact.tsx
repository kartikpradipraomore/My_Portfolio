





import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  // ✅ Correct state initialization
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const form = useRef<HTMLFormElement | null>(null);

  // ✅ Handle form submission
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(name.trim() === '');
    setEmailError(email.trim() === '');
    setMessageError(message.trim() === '');

    if (name.trim() && email.trim() && message.trim()) {
      console.log('Form Submitted:', { name, email, message });
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              {/* ✅ Working Input for Name */}
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name} // ✅ Bind value to state
                onChange={(e) => {
                  console.log('Typing Name:', e.target.value); // Debugging
                  setName(e.target.value);
                }} // ✅ Update state
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              
              {/* ✅ Working Input for Email */}
              <TextField
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email} // ✅ Bind value to state
                onChange={(e) => {
                  console.log('Typing Email:', e.target.value); // Debugging
                  setEmail(e.target.value);
                }} // ✅ Update state
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>

            {/* ✅ Working Input for Message */}
            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message} // ✅ Bind value to state
              onChange={(e) => {
                console.log('Typing Message:', e.target.value); // Debugging
                setMessage(e.target.value);
              }} // ✅ Update state
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />

            {/* ✅ Submit Button */}
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
