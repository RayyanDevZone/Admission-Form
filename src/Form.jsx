import React from "react";
import './App.css'

function Form() {
    function submit(){
        alert("Congrats You are successfully Enrolled")

    }
  return (
    <div className="main">
      <h1> Hey Coders...!</h1>
      <h1> Welcome to HUNET.</h1>
      <div className=" box">
        <h6>Admission form</h6>
        <hr id="hr" />
        <div className="inpt">
          <span>
            First Name: <input required placeholder="Enter your First Name" className="input" type="text" /> Last Name:{" "}
            <input className="input" placeholder="Enter your Last Name" required type="text" />{" "}
          </span>
          <div className="qualification">
            Qualification
            <select id="qualification" name="Qualification">
              <option value="">Choose an option</option>
              <option value="12th passed">12th passed</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Masters degree">Masters degree</option>
              <option value="none">None</option>
            </select>
          </div>
          <div className="codingLanguages">
            <label for="codingLanguages">
              Do you know any coding languages?
            </label>
            <br />
            <input
              className="coding"
              type="radio"
              id="yes"
              name="codingLanguages"
              value="yes"
            />
            <label for="yes">Yes</label>
            <br />
            <input
               required
              className="coding"
              type="radio"
              id="no"
              name="codingLanguages"
              value="no"
            />
            <label for="no">No</label>
            <br />
          </div>
          <div className="contact">
            Contact Number:
            <input required placeholder="Enter your Contact Number" className="input" type="number" /> Email:
            <input required placeholder="Enter your email" className="input" type="email" />
          </div>
          <button id="btn" onClick={submit}>Submit</button>
        </div>
      </div>
    </div>

  );
}
export default Form;
