import React, { useState } from "react";
import axios from "axios";
import "./auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await axios.post(
        "http://localhost:3002/login",
        { email, password },
        { withCredentials: true }
      );
      window.location.href = "http://localhost:3000/";
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page d-flex align-items-center justify-content-center">
      <div className="auth-card">
        <div className="auth-brand mb-4">
          <span className="brand-mark">K</span>
          <span className="brand-name">Kite</span>
        </div>

        <h1 className="auth-title mb-1">Login</h1>
        <p className="auth-subtitle mb-4">Welcome back, please enter your details</p>

        {error && <div className="auth-error mb-3">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label auth-label">Email</label>
            <input
              type="email"
              className="form-control auth-input"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-2">
            <label className="form-label auth-label">Password</label>
            <input
              type="password"
              className="form-control auth-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="text-end mb-4">
            <a href="/forgot-password" className="auth-link-small">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn auth-submit w-100" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="auth-footer mt-4 mb-0">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;