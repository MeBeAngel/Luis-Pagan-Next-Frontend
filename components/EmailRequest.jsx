import React, { useRef, useState } from 'react';


export default function EmailRequest() {




     // 1. Create a reference to the input so we can fetch/clear it's value.
     const inputEmail = useRef(null);
 
     // 2. Hold a message in state to handle the response from our API.
     const [message, setMessage] = useState('');
   
     const subscribe = async (e) => {
       e.preventDefault();
   
       // 3. Send a request to our API with the user's email address.
       const res = await fetch('/api/subscribe', {
         body: JSON.stringify({
           email: inputEmail.current.value,
         }),
         headers: {
           'Content-Type': 'application/json'
         },
         method: 'POST'
       });
   
       const { error } = await res.json();
   
       if (error) {
         // 4. If there was an error, update the message in state.
         setMessage(error);
   
         return;
       }
   
       // 5. Clear the input value and show a success message.
       inputEmail.current.value = '';
       setMessage('Success! 🎉 You are now subscribed to the newsletter.');
     };



  return (
    <form className="email-request" onSubmit={subscribe}>
    <p>CURIOUS? FIND OUT WHAT WE CAN ACHIEVE!</p>
    <input
      id="email"
      type="email" 
      name="email"
      placeholder="Email Address"
      ref={inputEmail}
    />
    
    <button className="email-btn yellow-btn" type="submit" >
      Sign Up
    </button>
  </form>
  );
}
