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
        // Axios request to login endpoint
        const res = await axios.post(
          "http://localhost:4001/users/login",
          userInfo
        );

        // Log response for debugging
        console.log("Login response data:", res.data);

        if (res.data && res.data.user) {
          toast.success("Login Successful");

          // Save user to localStorage
          localStorage.setItem("Users", JSON.stringify(res.data.user));

          // Redirect user after successful login
          setTimeout(() => {
            navigate("/");
            window.location.reload();
          }, 1000);
        } else {
          toast.error("Login failed. Please try again.");
        }
      } catch (err) {
        // Check if we received an error response from the server
        if (err.response) {
          console.log("Server error response:", err.response);
          toast.error("Error: " + err.response.data.message);
        } else {
          // For other types of errors (network issues, etc.)
          console.log("Unknown error:", err);
          toast.error("Error: Unknown error occurred");
        }
      }
    }

    // Call the login function
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
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="error-text">{errors.email.message}</span>
              )}

              {/* Password */}
              <span>Password</span>
              <input
                type="password"
                placeholder="Enter your password"
                className="input-field"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="error-text">{errors.password.message}</span>
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
