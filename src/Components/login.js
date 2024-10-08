import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import NavBars from "../Sections/navbar";
import Footer from "../Sections/footer";
import "./login.css";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    async function login() {
      try {
        const res = await axios.post(
          "http://localhost:4001/users/login",
          userInfo
        );
        console.log(res.data);
        if (res.data) {
          toast.success("Login Successful");
          localStorage.setItem("Users", JSON.stringify(res.data.user));

          setTimeout(() => {
            navigate("/");
            window.location.reload();
          }, 1000);
        }
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
    login();
  };

  return (
    <>
      <NavBars />
      <div className="login-container">
        <div className="login-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="login-title">Login</h3>
            <div className="input-group">
              {/* Email */}
              <span>Email</span>
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
              <span>Password</span>
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
              <button type="submit" className="login-btn">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link to="/signup" className="register-link">
                  Register
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

export default Login;
