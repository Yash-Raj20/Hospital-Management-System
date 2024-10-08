import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Login from "./Login";
import NavBars from "../Sections/navbar";
import Footer from "../Sections/footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import "./signup.css";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    async function signup() {
      try {
        const res = await axios.post(
          "http://localhost:4001/users/signup",
          userInfo
        );
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfull");
          setTimeout(() => {
            navigate(from, { replace: true });
            window.location.reload();
          }, 1000);
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      } catch (err) {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        } else {
          console.log(err);
          toast.error("Error: Unknown error occurred");
        }
      }
    }
    signup();
  };
  return (
    <>
      <NavBars />
      <div className="signup-container">
        <div className="signup-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button to navigate back */}
            <Link to="/" className="close-btn">
              ✕
            </Link>

            <h3 className="signup-title">Signup</h3>

            <div className="input-group">
              {/* Name */}
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your fullname"
                className="input-field"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span className="error-text">This field is required</span>
              )}

              {/* Email */}
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="error-text">This field is required</span>
              )}

              {/* Password */}
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input-field"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="error-text">This field is required</span>
              )}
            </div>

            <div className="actions">
              <button className="signup-btn">Signup</button>
              <p className="login-text">
                Have an account?{" "}
                <Link to="/login" className="login-link">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
