import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SetUsername.css';
const BASE_URL = process.env.REACT_APP_API_URL;

const SetUsername = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [message, setMessage] = useState('');
  const [warning, setWarning] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('userInfo');
    if (saved) {
      setUserInfo(JSON.parse(saved));
    } else {
      setMessage("⚠️ Session expired. Please register again.");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) {
      setMessage("❌ Username is required");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const payload = {
        username,
        email: userInfo.email,
        phone: userInfo.phone,
      };

      const res = await axios.post(`${BASE_URL}/api/user/set-username`, payload);

      setMessage(res.data.message || "🎉 Username set! Account created successfully.");
      localStorage.removeItem("userInfo");

      setTimeout(() => navigate("/userHomePage"), 1500);
    } catch (err) {
      console.error("❌ Failed to set username:", err);
      setMessage(err.response?.data?.message || "❌ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const input = e.target.value;

    // If there's a space or uppercase, show warning
    if (/[A-Z]/.test(input) || /\s/.test(input)) {
      setWarning("⚠️ Only lowercase letters, numbers, and special symbols allowed. No spaces or capital letters.");
    } else {
      setWarning('');
    }

    // Transform input to lowercase and remove spaces
    const filtered = input.toLowerCase().replace(/\s/g, '');
    setUsername(filtered);
  };

  return (
    <div>
      <form id="set-username-form" onSubmit={handleSubmit}>
        <h2>Set Your Username</h2>

        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleChange}
            minLength={3}
            maxLength={20}
            required
          />
        </div>


        <button id="submit-btn" type="submit" disabled={loading}>
          {loading ? "Saving..." : "Submit"}
        </button>
        {warning && <p style={{ color: 'orange' }}>{warning}</p>}
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default SetUsername;
