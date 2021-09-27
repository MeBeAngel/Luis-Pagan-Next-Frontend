// import { useForm, ValidationError } from "@formspree/react";
import React, { useRef, useState } from 'react';
import { useMediaQuery } from "react-responsive";
import Button from "../components/Button";

export default function FormPage(props) {
  const isMobile = useMediaQuery({ query: "(min-width: 540px)" });



   // 1. Create a reference to the input so we can fetch/clear it's value.
   const inputFirstName = useRef(null);
   const inputLastName = useRef(null);
   const inputEmail = useRef(null);
   const inputPhone = useRef(null);
   const inputQuestion = useRef(null);

   // 2. Hold a message in state to handle the response from our API.
   const [message, setMessage] = useState('');
 
   const subscribe = async (e) => {
     e.preventDefault();
 
     // 3. Send a request to our API with the user's email address.
     const res = await fetch('/api/form-submit', {
       body: JSON.stringify({
         firstname: inputFirstName.current.value,
         lastname: inputLastName.current.value,
         email: inputEmail.current.value,
         phone: inputPhone.current.value,
         question: inputQuestion.current.value
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
     inputFirstName.current.value = '';
     inputLastName.current.value = '';
     inputPhone.current.value = '';
     inputQuestion.current.value = '';
     setMessage('Success! 🎉 You are now subscribed to the newsletter.');
   };


  return (
    <div className="form-page">
      <div className="form-page-intro">
        <h1>Almost There!</h1>
        <p>
          You’ve taken the first crucial step alone, but rest assured that we
          will take the rest of them together.
        </p>
      </div>

<div className="form-wrapper">
      <form onSubmit={subscribe}>

      <div className="form-intro">
        <h1>Almost There!</h1>
        <p>
          You’ve taken the first crucial step alone, but rest assured that we
          will take the rest of them together.
        </p>
      </div>

        <div className="form-question">
          <div className="question-inner">
            <input
              type="text"
              className="form-control"
              id="fName"
              name="fName"
              placeholder="First Name"
              ref={inputFirstName}
              required
            />
          </div>
        </div>

        <div className="form-question">
          <div className="question-inner">
            <input
              type="text"
              className="form-control"
              id="lName"
              name="lName"
              placeholder="Last Name"
              ref={inputLastName}
              required
            />
          </div>
        </div>

        <div className="form-question">
          <div className="question-inner">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
              ref={inputEmail}
              required
            />
          </div>
        </div>

        <div className="form-question">
          <div className="question-inner">
            <input
              type="number"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Phone"
              ref={inputPhone}
              required
            />
          </div>
        </div>

        <div className="form-question">
          <div className="question-inner">
            <textarea
              className="form-control"
              type="text"
              id="textarea"
              name="textarea"
              rows={isMobile ? "10" : "6"}
              placeholder="Why do you want to join the National Guard?"
              ref={inputQuestion}
              required
            ></textarea>
          </div>
        </div>

        <Button
          type="submit"
          btnClass="form-btn yellow-btn btn-shadow"
          btnText="Submit"
        />
      </form>
      </div>
    </div>
  );
}
