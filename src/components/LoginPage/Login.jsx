import React, { useState } from "react";
import Dropdown from "react-select";
import { useFormik, Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import "./login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Login() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  // const [isLoginMode, setLoginMode] = useState(true);
  const handleSignUpClick = () => {
    setIsSignUpMode(true);
    // setLoginMode(false);
  };
  const handleLogInClick = () => {
    setIsSignUpMode(false);
    // setLoginMode(true);
  };
  // const signUpSubmit = () => {
  //   setIsSignUpMode(false);
  // };
  return (
    <div className={`loginContainer ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form loginForm">
            <h2 className="title">Log in</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="icons" />
              <input className="LoginInput" type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="icons" />
              <input
                className="LoginInput"
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="btn">Log In</button>
            <p className="social-text loginp"> Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className="my-auto mx-auto" />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="my-auto mx-auto"
                />
              </a>
            </div>
          </form>

          <Formik
            initialValues={{
              organizationname: "",
              firstname: "",
              phonenumber: "",
              roalintheorganization: "",
              email: "",
              password: "",
              selectwhatyouarelookingfor: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={Yup.object({
              organizationname: Yup.string().required(
                "Organization name is required"
              ),
              firstname: Yup.string().required("Your name is required"),
              phonenumber: Yup.string().required("Phone number is required"),
              roalintheorganization: Yup.string().required(
                "Roal in the organization?"
              ),
              email: Yup.string().required("Email is required"),
              password: Yup.string().required("Create your own password"),
              selectwhatyouarelookingfor: Yup.string().required(
                "What you are looking for?"
              ),
            })}
          >
            <Form action="#" className="sign-up-form loginForm">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <FontAwesomeIcon icon={faUser} className="icons" />
                <Field
                  name="organizationname"
                  className="LoginInput"
                  type="text"
                  placeholder="Organization Name"
                />
                <ErrorMessage
                  name="organizationname"
                  component="div"
                  className="form-error"
                />
              </div>
              <div className="input-field">
                <FontAwesomeIcon icon={faEnvelope} className="icons" />
                <Field
                  name="firstname"
                  className="LoginInput"
                  type="text"
                  placeholder="Your Name"
                />
                <ErrorMessage
                  name="firstname"
                  component="div"
                  className="form-error"
                />
              </div>
              <div className="input-field">
                <FontAwesomeIcon icon={faEnvelope} className="icons" />
                <Field
                  name="phonenumber"
                  className="LoginInput"
                  type="number"
                  placeholder="Phone Number"
                />
                <ErrorMessage
                  name="phonenumber"
                  component="div"
                  className="form-error"
                />
              </div>
              <div className="input-field">
                <FontAwesomeIcon icon={faLock} className="icons" />
                <Field
                  name="roalintheorganization"
                  className="LoginInput"
                  type="text"
                  placeholder="Roal in the organization"
                />
                <ErrorMessage
                  name="roalintheorganization"
                  component="div"
                  className="form-error"
                />
              </div>
              <div className="input-field">
                <FontAwesomeIcon icon={faLock} className="icons" />
                <Field
                  name="email"
                  className="LoginInput"
                  type="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="form-error"
                />
              </div>
              <div className="input-field">
                <FontAwesomeIcon icon={faLock} className="icons" />
                <Field
                  name="password"
                  className="LoginInput"
                  type="password"
                  placeholder="Create Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="form-error"
                />
              </div>
              <div className="input-field ">
                <FontAwesomeIcon icon={faLock} className="icons" />
                <Field
                  name="selectwhatyouarelookingfor"
                  as={Dropdown}
                  className="LoginInput"
                  type="select"
                  placeholder="What you are looking for?"
                />
                <ErrorMessage
                  name="selectwhatyouarelookingfor"
                  component="div"
                  className="form-error"
                />
              </div>
              <button className="btn btn-desktop" type="submit">
                Sign Up
              </button>
              <p className="social-text loginp signup-text-res">
                Or Sign up with social platforms
              </p>
              <div className="social-media social-media-res">
                <a href="#" className="social-icon">
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className="my-auto mx-auto"
                  />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="my-auto mx-auto"
                  />
                </a>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel left-panel-res">
          <div className="content">
            <h3 className="loginh3">New here?</h3>
            <p className="loginp">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src="/public/hero.png" className="image" alt="signup-image" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3 className="loginh3 loginh3-res">One of us ?</h3>
            <p className="loginp loginnp-res">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              onClick={handleLogInClick}
              className="btn transparent login-btn-res"
              id="sign-in-btn"
            >
              Log in
            </button>
          </div>
          <img src="/public/hero.png" className="image" alt="login-image" />
        </div>
      </div>
    </div>
  );
  //   const [isSignUpMode, setIsSignUpMode] = useState(false);
  //   // const [isLoginMode, setLoginMode] = useState(true);
  //   const handleSignUpClick = () => {
  //     setIsSignUpMode(true);
  //     // setLoginMode(false);
  //   };
  //   const handleLogInClick = () => {
  //     setIsSignUpMode(false);
  //     // setLoginMode(true);
  //   };
  //   const signUpSubmit = () => {
  //     setIsSignUpMode(false);
  //   };
  //   return (
  //     <div className={`loginContainer ${isSignUpMode ? "sign-up-mode" : ""}`}>
  //       <div className="forms-container">
  //         <div className="signin-signup">
  //           <form action="#" className="sign-in-form loginForm">
  //             <h2 className="title">Log in</h2>
  //             <div className="input-field">
  //               <FontAwesomeIcon icon={faEnvelope} className="icons" />
  //               <input className="LoginInput" type="email" placeholder="Email" />
  //             </div>
  //             <div className="input-field">
  //               <FontAwesomeIcon icon={faLock} className="icons" />
  //               <input
  //                 className="LoginInput"
  //                 type="password"
  //                 placeholder="Password"
  //               />
  //             </div>
  //             <button className="btn">Log In</button>
  //             <p className="social-text loginp"> Sign in with social platforms</p>
  //             <div className="social-media">
  //               <a href="#" className="social-icon">
  //                 <FontAwesomeIcon icon={faGoogle} className="my-auto mx-auto" />
  //               </a>
  //               <a href="#" className="social-icon">
  //                 <FontAwesomeIcon
  //                   icon={faLinkedinIn}
  //                   className="my-auto mx-auto"
  //                 />
  //               </a>
  //             </div>
  //           </form>
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //           <Formik
  //             initialValues={{
  //               organizationname: "",
  //               firstname: "",
  //               phonenumber: "",
  //               roalintheorganization: "",
  //               email: "",
  //               password: "",
  //               selectwhatyouarelookingfor: "",
  //             }}
  //             onSubmit={(values) => {
  //               console.log(values);
  //             }}
  //             validationSchema={Yup.object({
  //               organizationname: Yup.string().required(
  //                 "Organization name is required"
  //               ),
  //               firstname: Yup.string().required("Your name is required"),
  //               phonenumber: Yup.string().required("Phone number is required"),
  //               roalintheorganization: Yup.string().required(
  //                 "Roal in the organization?"
  //               ),
  //               email: Yup.string().required("Email is required"),
  //               password: Yup.string().required("Create your own password"),
  //               selectwhatyouarelookingfor: Yup.string().required(
  //                 "What you are looking for?"
  //               ),
  //             })}
  //           >
  //             <Form action="#" className="">
  //               <h2 className="title">Sign up</h2>
  //               <div className="input-field">
  //                 <FontAwesomeIcon icon={faUser} className="icons" />
  //                 <Field
  //                   name="organizationname"
  //                   className="LoginInput"
  //                   type="text"
  //                   placeholder="Organization Name"
  //                 />
  //                 <ErrorMessage
  //                   name="organizationname"
  //                   component="div"
  //                   className="form-error"
  //                 />
  //               </div>
  //               <div className="input-field">
  //                 <FontAwesomeIcon icon={faEnvelope} className="icons" />
  //                 <Field
  //                   name="firstname"
  //                   className="LoginInput"
  //                   type="text"
  //                   placeholder="Your Name"
  //                 />
  //                 <ErrorMessage
  //                   name="firstname"
  //                   component="div"
  //                   className="form-error"
  //                 />
  //               </div>
  //               <div className="input-field">
  //                 <FontAwesomeIcon icon={faEnvelope} className="icons" />
  //                 <Field
  //                   name="phonenumber"
  //                   className="LoginInput"
  //                   type="number"
  //                   placeholder="Phone Number"
  //                 />
  //                 <ErrorMessage
  //                   name="phonenumber"
  //                   component="div"
  //                   className="form-error"
  //                 />
  //               </div>
  //               <div className="input-field">
  //                 <FontAwesomeIcon icon={faLock} className="icons" />
  //                 <Field
  //                   name="roalintheorganization"
  //                   className="LoginInput"
  //                   type="text"
  //                   placeholder="Roal in the organization"
  //                 />
  //                 <ErrorMessage
  //                   name="roalintheorganization"
  //                   component="div"
  //                   className="form-error"
  //                 />
  //               </div>
  //               <div className="input-field">
  //                 <FontAwesomeIcon icon={faLock} className="icons" />
  //                 <Field
  //                   name="email"
  //                   className="LoginInput"
  //                   type="email"
  //                   placeholder="Email"
  //                 />
  //                 <ErrorMessage
  //                   name="email"
  //                   component="div"
  //                   className="form-error"
  //                 />
  //               </div>
  //               <div className="input-field">
  //                 <FontAwesomeIcon icon={faLock} className="icons" />
  //                 <Field
  //                   name="password"
  //                   className="LoginInput"
  //                   type="password"
  //                   placeholder="Create Password"
  //                 />
  //                 <ErrorMessage
  //                   name="password"
  //                   component="div"
  //                   className="form-error"
  //                 />
  //               </div>
  //               <div className="last-input-field ">
  //                 <FontAwesomeIcon icon={faLock} className="last-icons" />
  //                 <Field
  //                   name="selectwhatyouarelookingfor"
  //                   className="LastLoginInput"
  //                   type="text"
  //                   placeholder="What you are looking for?"
  //                 />
  //                 <ErrorMessage
  //                   name="selectwhatyouarelookingfor"
  //                   component="div"
  //                   className="form-error"
  //                 />
  //               </div>
  //               <button className="btn btn-desktop" type="submit">
  //                 Sign Up
  //               </button>
  //               <p className="social-text loginp signup-text-desktop">
  //                 Or Sign up with social platforms
  //               </p>
  //               <div className="social-media">
  //                 <a href="#" className="social-icon">
  //                   <FontAwesomeIcon
  //                     icon={faGoogle}
  //                     className="my-auto mx-auto"
  //                   />
  //                 </a>
  //                 <a href="#" className="social-icon">
  //                   <FontAwesomeIcon
  //                     icon={faLinkedinIn}
  //                     className="my-auto mx-auto"
  //                   />
  //                 </a>
  //               </div>
  //             </Form>
  //           </Formik>
  //         </div>
  //       </div>
  //       <div className="panels-container">
  //         <div className="panel left-panel">
  //           <div className="content">
  //             <h3 className="loginh3">New here?</h3>
  //             <p className="loginp">
  //               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
  //               ex ratione. Aliquid!
  //             </p>
  //             <button className="btn transparent" onClick={handleSignUpClick}>
  //               Sign up
  //             </button>
  //           </div>
  //           <img src="/public/hero.png" className="image" alt="signup-image" />
  //         </div>
  //         <div className="panel right-panel">
  //           <div className="content">
  //             <h3 className="loginh3">One of us ?</h3>
  //             <p className="loginp">
  //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
  //               laboriosam ad deleniti.
  //             </p>
  //             <button
  //               onClick={signUpSubmit}
  //               className="btn transparent"
  //               id="sign-in-btn"
  //             >
  //               Log in
  //             </button>
  //           </div>
  //           <img src="/public/hero.png" className="image" alt="login-image" />
  //         </div>
  //       </div>
  //     </div>
  //   );
}

export default Login;
