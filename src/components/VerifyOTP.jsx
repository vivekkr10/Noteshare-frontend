import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/VerifyOTP.css';
const BASE_URL = process.env.REACT_APP_API_URL;

const VerifyOTP = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    email: '',
    phone: ''
  });

  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  // ✅ Load user info from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('userInfo');
    if (saved) {
      const parsed = JSON.parse(saved);
      setUserDetails({ email: parsed.email, phone: parsed.phone });
    } else {
      setMessage("⚠️ User info missing. Please register again.");
    }
  }, []);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        email: userDetails.email || undefined,
        phone: userDetails.phone || undefined,
        otp
      };

      const res = await axios.post(`${BASE_URL}/verify-otp`, payload);
      console.log("✅ OTP Verified:", res.data.message);

      setMessage("✅ OTP verified. Redirecting...");
      setTimeout(() => navigate('/set-username'), 1000);
    } catch (err) {
      console.error("❌ OTP verification failed:", err.response?.data?.message || err.message);
      setMessage("❌ OTP verification failed. Please try again.");
    }
  };

  const handleResendOtp = async () => {
    try {
      await axios.post(`${BASE_URL}/send-otp`, {
        email: userDetails.email || undefined,
        phone: userDetails.phone || undefined
      });
      setMessage("🔁 OTP resent successfully.");
    } catch (err) {
      console.error("❌ Failed to resend OTP:", err);
      setMessage("❌ Could not resend OTP. Try again.");
    }
  };

  return (
    <div>
      <form id="verify-form" onSubmit={handleVerifyOtp}>
        <h2>Verify OTP</h2>

        <div id="otp-input">
          <label htmlFor="otp">Enter OTP</label>
          <input
            type="number"
            name="otp"
            id="otp"
            value={otp}
            onChange={handleOtpChange}
            required
          />
        </div>

        <button id="verifyBtn" type="submit">Verify OTP</button>

        <button id="resendBtn" type="button" onClick={handleResendOtp}>
          Resend OTP
        </button>

        {message && <p id="otp-msg">{message}</p>}
      </form>
    </div>
  );
};

export default VerifyOTP;
