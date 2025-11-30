import React, { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
       "https://zerodha-clone-qetz.onrender.com/user/login",
        { email, password },
        { withCredentials: true }
      );
      alert("Login successful!");
      window.location.href = "https://zerodha-clone-6fqx.vercel.app/dashboard"; 
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="text-center mb-3">
          <h3 className="fw-bold text-primary">Login to Your Account</h3>
          <p className="text-muted small mb-0">
            Welcome back! Please enter your credentials.
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <p className="text-center mt-3 mb-0 text-muted small">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-primary text-decoration-none fw-semibold"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
