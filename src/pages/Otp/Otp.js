import axios from "axios";
import React, { useState } from "react";
// import "../Registeration/Registeration.css";
import { useNavigate } from "react-router-dom";
import data from "../../json/Data";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Call_Api from "../../Handileapicall/call_api";
import "../../styles/Otp.css";

import { useSelector } from "react-redux";
import handleuser from "../../common/getUserDetails/GetUserDetails";

const Otp = () => {
  const navigate = useNavigate();

  const token = useSelector((state) => state.userToken.token);
  console.log("Token from Redux in OTP page: ", token);

  const settingTokenToLocalStorage = (token) => {
    if (!token) {
      console.error("No token provided to store in localStorage.");
      alert("Token Not Provided");
      return;
    }
    try {
      localStorage.setItem("token", JSON.stringify(token));
      console.log("Token stored successfully in localStorage.");
    } catch (err) {
      console.error("Error storing token in localStorage:", err);
    }
  };

  const handlegetuser = async () => {
    console.log("entered into handleuser")
      try {
        const response = await handleuser()
        console.log("response in handlegetuser",response);
        if (response?.response?.response?.role == "admin") {
          navigate("/dashboard");
        } else if(response?.response?.response?.role == "user"){
          navigate("/dashboard");
        } else {
          localStorage.removeItem("token");
          navigate("/login");
        }
      } catch (err) {
        console.error(err);
      }
    };
    
  return (
    <>
      <div>
        <div className="otpDiv">
          <div className="w-75 h-75 bg-gradient row p-3 rounded-2">
            <div className="col-7 text-light d-flex justify-content-end px-5">
              <div>
                <img
                  src="/images/ntar.gif-_VGlxBXr.webp"
                  width="400px"
                  alt="noImage"
                />
                <div>
                  <h1 className="text-warning">Well come to Ntar !!</h1>
                  <div className="fw-bold fs-2">
                    Secure Access to Our API Platform
                  </div>
                  <div>
                    login in securely to get access to the full suite of APIs.
                    Manage your keys,
                    <div>
                      monitor performance, and explore new integrations to
                      accelerate your development.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col text-light d-flex justify-content-center align-items-center">
              <div className="border border-1 border-primary-subtle h-auto rounded-4 p-3 px-5">
                <h2 className=" text-center mt-5">Verify OTP</h2>
                <Formik
                  initialValues={{ submittedOtp: "" }}
                  validationSchema={yup.object({
                    submittedOtp: yup.string().required("Please enter OTP"),
                  })}
                  onSubmit={async (values) => {
                    try {
                      const response = await Call_Api(
                        "/login/otpVerify",
                        "POST",
                        values,
                        token
                      ); 
                      console.log(response, "this response from otp");
                      toast.success(response?.response?.message);
                      if (response.success) {
                        settingTokenToLocalStorage(token);
                        await handlegetuser();
                         navigate("/dashboard");  
                      } else {
                        localStorage.clear("token");
                      }
                    } catch (error) {
                      toast.error(error?.response?.message);
                      console.log(error);
                    }
                  }}
                >
                  {(form) => (
                    <Form>
                      <div className=" d-flex flex-column justify-content-center">
                        <div className="mt-5">
                          <b>Enter OTP</b>
                          <Field
                            type="text"
                            name="submittedOtp"
                            placeholder="Enter Otp"
                            className="form-control mt-2 p-2"
                          />
                          <ErrorMessage
                            name="submittedOtp"
                            component="div"
                            className="text-danger"
                          />
                          <button
                            type="submit"
                            className="btn btn-primary w-100 mt-4 p-2"
                          >
                            Verify OTP
                          </button>
                        </div>
                        <div></div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
