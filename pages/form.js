import { useForm, ValidationError } from "@formspree/react";
import { useMediaQuery } from "react-responsive";
import Button from "../components/Button";

export default function FormPage(props) {
  const isMobile = useMediaQuery({ query: "(min-width: 540px)" });

  const [state, handleSubmit] = useForm("optInForm");
  if (state.succeeded) {
    window.scrollTo(0, 0);
    return <div className="form-submitted"><h1>Thanks for joining!</h1></div>;
  }

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
      <form onSubmit={handleSubmit}>

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
              id="Fname"
              name="Fname"
              placeholder="First Name"
              required
            />
          </div>
        </div>

        <div className="form-question">
          <div className="question-inner">
            <input
              type="text"
              className="form-control"
              id="Lname"
              name="Lname"
              placeholder="Last Name"
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
              required
            ></textarea>
          </div>
        </div>

        {/* <ValidationError prefix="Email" field="email" errors={state.errors} /> */}

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
