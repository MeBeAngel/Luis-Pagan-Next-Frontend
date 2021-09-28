// import { useForm, ValidationError } from "@formspree/react";
import React, { useRef, useState } from "react";
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

  // Reset all input fields
  function resetFields() {
    inputEmail.current.value = "";
    inputFirstName.current.value = "";
    inputLastName.current.value = "";
    inputPhone.current.value = "";
    inputQuestion.current.value = "";
  }

  ////////////////////////////////////////////////////// API call //////////////////////
  const subscribe = async (e) => {
    e.preventDefault();

    /// vars
    const mobileIntro = document.querySelector(".form-page-intro");
    const desktopIntro = document.querySelector(".form-intro");
    const form = document.querySelector("form");
    const successMessage = document.querySelector(".success-message");

    // 3. Send a request to our API with the user's email address.
    const res = await fetch("/api/form-submit", {
      body: JSON.stringify({
        firstName: inputFirstName.current.value,
        lastName: inputLastName.current.value,
        email: inputEmail.current.value,
        phone: inputPhone.current.value,
        question: inputQuestion.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    // If email already exists in Mailchimp List
    if (res.status === 500 || res.status === 400) {
      mobileIntro.children[1].style.textAlign = "center";
      mobileIntro.children[0].innerText = "Already Subscribed";
      mobileIntro.children[1].innerText =
        "We will get back to you as soon as possible";
        mobileIntro.children[0].style.color = "red";
        mobileIntro.children[1].style.color = "red";

      desktopIntro.children[0].innerText = "Already Subscribed";
      desktopIntro.children[1].innerText =
        "We will get back to you as soon as possible";
       desktopIntro.children[0].style.color = "red";
       desktopIntro.children[1].style.color = "red";

      resetFields();
      window.scrollTo(0, 0);
      console.log("Email already subscribed");
    }

    /////////////// Errors ////////////////////
    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      console.log(error);
      return;
    }

    // 5. Clear the input value and show a success message.
    resetFields();

    form.style.display = "none";
    mobileIntro.style.display = "none";
    successMessage.style.display = "flex";
    window.scrollTo(0, 0);
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
              You’ve taken the first crucial step alone, but rest assured that
              we will take the rest of them together.
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
      <div className="success-message">
        <h1>Congratulations!</h1>
        <p>
          If you have any additional questions, do not hesitate to contact me.
        </p>
        <div className="contact-info">
          <p>Staff Sergeant Luis Pagan-Montalvo</p>
          <p>montalvo.l.pagan.mil@mail.mil</p>
          <p>(347) 865-8226</p>
        </div>
      </div>
    </div>
  );
}
