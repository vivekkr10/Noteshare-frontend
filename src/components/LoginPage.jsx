import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/LoginPage.css';
const BASE_URL = process.env.REACT_APP_API_URL;

const LoginPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      const response = await axios.post(`${BASE_URL}/api/user/login`, {
        email: form.email,
        password: form.password,
      });

      // ✅ Save user info locally
      localStorage.setItem("userInfo", JSON.stringify({
        id: response.data.user.id,
        username: response.data.user.username,
        email: response.data.user.email,
      }));

      // ✅ Save token if needed
      localStorage.setItem("userToken", response.data.token);

      navigate("/userHomePage");
    } catch (err) {
      console.error("Login failed", err);
      setMessage("Invalid email or password.");
    } finally {
      setLoading(false); // hide spinner
    }
  };

  return (
    <div>
      <form id="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div id="login-email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div id="login-password">
  <label htmlFor="password">Password</label>
  <div className="input-wrapper">
    <input
      type={showPassword ? 'text' : 'password'}
      name="password"
      id="password"
      value={form.password}
      onChange={handleChange}
      required
    />
    <i
      className={`eye-icon ${showPassword ? 'bx bx-hide' : 'bx bx-show'}`}
      onClick={togglePasswordVisibility}
    />
  </div>
</div>


        <button id="loginn" type="submit" disabled={loading}>
          {loading ? (
        <>
          <span className="loader"></span> Logging in...
        </>
          ) : (
          "Login"
          )}
        </button>
        <p>Don't have an account? <NavLink to="/login">Register here</NavLink></p>

        {message && <p id="login-message">{message}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
