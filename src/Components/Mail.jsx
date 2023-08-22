import React, { useState, useRef, useEffect } from 'react'
import '../styles/Mail.css'

//import emailjs from '@emailjs/browser';

const Mail = () => {
//   const radio = useRef();
//   const [toSend, setToSend] = useState({
//     subject: '',
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isDisabled, setIsDisabled] = useState(false);
//   const valid = {
//     email: false,
//     rest: false
//   }
//   const error = useRef()
//   const formResMsg = useRef()

//   const validation = (email, name, message, subject) => {
//     const acceptedEmail = ['gmail.com', 'yahoo.com', 'yahoo.co.in', 'outlook.com', 'protonmail.com', 'aol.com', 'icloud.com', 'me.com', 'mac.com', 'gmx.com', 'hey.com']
//     if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
//       acceptedEmail.includes(email.split('@')[1]) ?
//         valid.email = true : valid.email = false
//     } else {
//       valid.email = false;
//     }

//     if (name !== '' && subject !== '' && message.length > 100) {
//       valid.rest = true;
//       console.log('here')
//     } else {
//       valid.rest = false;
//     }
//   }

//   const reset = () => {
//     setToSend({
//       subject: '',
//       name: '',
//       email: '',
//       message: ''
//     })
//   }

//   const handleClick = () => {
//     validation(toSend.email, toSend.name, toSend.message, toSend.subject);
//     const condition = Object.values(valid).every((value) => value === true)
//     if (!condition) {
//       error.current.style.display = 'block'
//     } else {
//       // Using email.js to send emails https://www.emailjs.com/docs/sdk/installation/
//       // use .env to store ids and keys from email.js
//       // emailjs.send(serviceID, templateID, toSend, publicKey)
//       //   .then((response) => {
//       //     formResMsg.current.innerText = "Message sent..."
//       //     reset();
//       //   }, (err) => {
//       //     formResMsg.current.innerText = "Failed... " + err.text
//       // });
//       // error.current.style.display = 'none'
//     }
//   }


//   const handleChange = (e) => {
//     setToSend({ ...toSend, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     const arrayOfSub = ['work', 'chat', 'collaboration']
//     if (toSend.subject === '') {
//       setIsDisabled(false)
//     } else {
//       if (!(arrayOfSub.includes(toSend.subject))) {
//         radio.current.checked = false;
//         setIsDisabled(true)
//       }
//     }
//   }, [toSend.subject])

  return (
    <div className='mail' id='mail'>
      <h2>Get In Touch</h2>
      <div class="paragraph-withme">
      My inbox is always open. Whether you have a question or just want to say hi,
       I’ll try my best to get back to you!
    </div>
    <div class="mail-me">
    <a target="_blank" href="mailto:allam.me@northeastern.edu"  className='btn2'>Mail Me</a>
    </div>
    </div>
  )
}

export default Mail;
