import React, { useRef, useState } from "react";

export default function EmailRequest() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEmail = useRef(null);

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEmail.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    // If email already exists in Mailchimp List
    if (res.status === 500 || res.status === 400) {
      document.querySelector(".email-request").children[0].innerHTML =
        "Already Subscribed";
      inputEmail.current.value = "";
      console.log("Email already subscribed");
    }

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, log it to the console.
      console.log(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEmail.current.value = "";
    document.querySelector(".success-message").style.display = "flex";
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

      <button className="email-btn yellow-btn" type="submit">
        Sign Up
      </button>

      <div className="success-message">
        <h1>All signed up!</h1>
      </div>
    </form>
  );
}
