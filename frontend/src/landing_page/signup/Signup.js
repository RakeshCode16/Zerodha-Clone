import React, { useState } from "react";
import axios from "axios";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3000/user/signup",
        { email, username, password },
        { withCredentials: true }
      );
      alert("Registration successful!");
      window.location.href = "/login";
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="text-center mb-3">
          <h3 className="fw-bold text-primary">Create an Account</h3>
          <p className="text-muted small mb-0">
            Join us and start your journey today!
          </p>
        </div>

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

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
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-3 mb-0 text-muted small">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-primary text-decoration-none fw-semibold"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}