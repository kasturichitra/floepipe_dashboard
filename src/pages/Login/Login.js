import React, { useState } from "react";
// import "../Registeration/Registeration.css";
import data from "../../json/Data";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Call_Api from "../../Handileapicall/call_api";
import { useDispatch } from "react-redux";
import { addUserToken } from "../../redux/slice/token/tokenSlice";
import * as Yup from 'yup';
import '../../styles/Login.css';
import flowpipelogo from "../../assets/images/Asset 41@300x-8.png";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const settingTokenToRedux = (token) => {
        if (!token) {
            console.error("No token provided to store in localStorage.");
            alert("Token Not Provided");
            return;
        }
        try {
            dispatch(addUserToken({ token }))
            console.log("Token stored successfully in localStorage.");
        } catch (err) {
            console.error("Error storing token in localStorage:", err);
        }
    };

    return (
        <>
            <div className="LoginDiv">
                <div className="w-75 h-75 bg-gradient row p-3 rounded-2">
                    <div className="col-7 text-light d-flex justify-content-end px-5">
                        <div>
                            <img
                                src={flowpipelogo}
                                alt="NTAR Logo"
                                width="150px"
                                style={{
                                    marginLeft: "80px",
                                    filter: "drop-shadow(0 0 10px rgba(168,85,255,0.5))",
                                }}
                            />
                            <div>
                                <h1 className="text-warning">{data?.WelcomeToFlowpipe}</h1>
                                <div className="fw-bold fs-2">Secure Access to Our API Platform</div>
                                <div >
                                    Login securely to access the full suite of APIs. Manage your keys,
                                    <div>monitor performance, and explore new integrations to accelerate your development.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col text-light d-flex justify-content-center align-items-center">
                        <div className="align-content-center border border-1 border-primary-subtle h-auto rounded-4 p-3 px-5">
                            <h2 className="text-center mb-4">{data.login}</h2>
                            <Formik
                                initialValues={{ email: '', mobileNumber: '', password: '' }}
                                validationSchema={Yup.object({
                                    email: Yup.string().email('Invalid email').required('Email is required'),
                                    mobileNumber: Yup.number().required('Mobile Number is required'),
                                    password: Yup.string().required('Password is required')
                                })}
                                onSubmit={async (formData) => {
                                    try {
                                        const res = await Call_Api("/login/loginVerify", "POST", formData);
                                        console.log("Login Successful:", res.success);
                                        toast.success(res?.response?.message);
                                        if (res.success) {
                                            settingTokenToRedux(res?.response?.token);
                                            await navigate("/otpVerify");
                                        }
                                    } catch (error) {
                                        alert(error?.response?.data?.message);
                                        console.error("Error during login:", error);
                                    }
                                }}
                            >
                                {form => (
                                    <Form>
                                        <div>
                                            <div className="mb-3">
                                                <b>Email</b>
                                                <Field type="email" name="email" placeholder="Enter your email" className="form-control" />
                                                <ErrorMessage name="email" component="div" className="text-danger" />
                                            </div>
                                            <div className="mb-3">
                                                <b>Number</b>
                                                <Field type="number" name="mobileNumber" placeholder="Enter your mobile number" className="form-control" />
                                                <ErrorMessage name="mobileNumber" component="div" className="text-danger" />
                                            </div>
                                            <div className="mb-5">
                                                <b>Password</b>
                                                <div className="password-field">
                                                    <Field
                                                        type={showPassword ? "text" : "password"}
                                                        name="password"
                                                        placeholder="Enter your password"
                                                        className="form-control"
                                                    />
                                                    <button
                                                        type="button"
                                                        className="show-password-btn"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                    >
                                                        {/* {showPassword ? "Hide" : "Show"} */}
                                                        {showPassword ? "👁️" : "🙈"}
                                                    </button>
                                                </div>
                                                <ErrorMessage name="password" component="div" className="text-danger" />
                                            </div>
                                            <div className="text-center mt-5">
                                                <button className="btn btn-outline-primary w-50" type="submit">Login</button>
                                            </div>
                                            <div>
                                                <p onClick={() => navigate("/register")} className="btn btn-link text-danger">
                                                    {data.notHavingAccount}
                                                </p>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
