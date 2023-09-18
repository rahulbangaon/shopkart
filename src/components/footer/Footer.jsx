import React, { useState } from "react";
import "./style.css";
import InputField from "../inputField/InputField";
import { useFormik } from "formik";
import { validateUserData } from "../../utils/formValidation";

const Footer = () => {
  const initialUserData = { name: "", email: "", message: "" };
  const [userData, setUserData] = useState({});

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: initialUserData,
    validationSchema: validateUserData,
    onSubmit: (values) => {
      setUserData(values);
      console.log("user Data saved is ", values);
      resetForm();
      alert("Thank You for Connecting, We'll be right back to you!");
    },
  });

  const formInputs = [
    {
      id: 0,
      name: "name",
      placeholder: "Name",
      type: "text",
    },
    {
      id: 1,
      name: "email",
      placeholder: "Email",
      type: "email",
    },
    {
      id: 2,
      name: "message",
      placeholder: "Message",
      type: "text",
    },
  ];

  return (
    <footer className="footer-section">
      {/* contact section */}
      <section className="contact-section">
        {/* contact subtitle  */}
        <div className="contact-subtitle">
          <h3 className="ff-syne">Newslleter</h3>
          <p className="ff-work-sans">
            Get news about articles and updates in your inbox.
          </p>
        </div>

        {/* form section */}
        <form
          id="userData-form"
          onSubmit={handleSubmit}
          className="contact-form"
        >
          {formInputs.map((input) => {
            return (
              <InputField
                key={input.id}
                {...input}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[input.name]}
                error={errors[input.name]}
                isTouched={touched[input.name]}
              />
            );
          })}
        </form>

        {/* contact title */}

        <div className="contact-title">
          <h1 className="ff-syne fs-700">Get</h1>
          <h1 className="in-title ff-syne fs-700">In</h1>
          <h1 className="touch-title ff-syne fs-700">Touch</h1>
          <button
            type="submit"
            form="userData-form"
            className="circle-btn fs-300 ff-work-sans"
          >
            Send
          </button>
        </div>
      </section>

      {/* copywrite */}
      <div className="copywrite-container">
        <p className="ff-poppins fs-200">
          Copyright 2022 All Right Reserved By SG
        </p>
      </div>
    </footer>
  );
};

export default Footer;
