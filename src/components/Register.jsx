import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import '../css/Register.css';
import 'boxicons/css/boxicons.min.css';
const BASE_URL = process.env.REACT_APP_API_URL;

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/register`, formData);

      // Save partial data to localStorage for use after OTP verification
      localStorage.setItem("userInfo", JSON.stringify(formData));

      console.log("✅ OTP Sent:", res.data.message);
      navigate("/verifyOtp");
    } catch (err) {
      console.error("❌ Registration failed:", err.response?.data?.message || err.message);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      <form id="register-form" onSubmit={handleSubmit}>
        <h1>Register</h1>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        {/* <div className="form-group">
          <label htmlFor="phone">Phone (optional)</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </div> */}

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ paddingRight: '40px' }}
          />
          <i
            id="eye"
            className={showPassword ? 'bx bx-hide' : 'bx bx-show'}
            onClick={togglePasswordVisibility}
          />
        </div>

        <button id="registerBtn" type="submit">Sign Up</button>
        <p>Already have an account? <NavLink to="/login">Login here</NavLink></p>
      </form>
    </div>
  );
};

export default Register;
