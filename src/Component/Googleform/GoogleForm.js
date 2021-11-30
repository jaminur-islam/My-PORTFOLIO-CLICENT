import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Googleform.css";

export const GoogleForm = ({ dark }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_j6zydfx",
        "template_vnhv573",
        form.current,
        "user_c3eE1p0wgt5lyvA4xrufS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className={dark ? "container text-white" : "container text-dark"}>
      <h2 className={dark ? "text-white text-center" : "text-dark text-center"}>
        Contact Me
      </h2>
      <hr className="w-25 mx-auto text-white" />
      <form
        className="formGoogle"
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          padding: "5px",
        }}
        ref={form}
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="btn btn-primary mt-2" type="submit" value="Send" />
      </form>
    </div>
  );
};
