import React from "react";
import { useForm, ValidationError } from '@formspree/react';



export default function EmailRequest() {

  const [state, handleSubmit] = useForm("optInForm");
  if (state.succeeded) {
    return <h1 className="email-request">Thanks for joining!</h1>;
  }

  return (
    <form className="email-request" onSubmit={handleSubmit}>
    <p>CURIOUS? FIND OUT WHAT WE CAN ACHIEVE!</p>
    <input
      id="email"
      type="email" 
      name="email"
      placeholder="Email Address"
    />
    
    <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors} 
    />
    <button className="email-btn yellow-btn" type="submit" disabled={state.submitting}>
      Sign Up
    </button>
  </form>
  );
}
