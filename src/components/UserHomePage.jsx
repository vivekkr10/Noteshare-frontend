import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import '../css/UserHomePage.css';
import { NavLink, useNavigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import Navbar from './Navbar';

const UserHomePage = () => {
  const [notesCount, setNotesCount] = useState({ count: 0, views: 0, downloads: 0 });
  const [latestNote, setLatestNote] = useState(null);
  const [popularNote, setPopularNote] = useState(null);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [userNotes, setUserNotes] = useState([]);
  const [uploadForm, setUploadForm] = useState({ title: '', subject: '', uploader: '', file: null, image: null });
  const [previewImageUrl, setPreviewImageUrl] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  const fetchNotes = async () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const userId = userInfo?.id;
      if (!userId) return;

      const res = await axios.get(`https://noteshare-backend-ujbv.onrender.com/home/${userId}`);
      setLatestNote(res.data.latest?.[0] || null);
      setPopularNote(res.data.popular?.[0] || null);
    } catch (err) {
      console.error("❌ Failed to fetch notes", err);
    }
  };

  const fetchStats = async () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const userId = userInfo?.id;
      if (!userId) return;

      const res = await axios.get(`https://noteshare-backend-ujbv.onrender.com/notes/stats/${userId}`);
      setNotesCount(res.data);
    } catch (err) {
      console.error("❌ Failed to fetch stats", err);
    }
  };

  const fetchUserNotes = async () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const userId = userInfo?.id;
      if (!userId) return;

      const res = await axios.get(`https://noteshare-backend-ujbv.onrender.com/notes/user/${userId}`);
      setUserNotes(res.data.notes || []);
      setTimeout(() => setShowNotesModal(true), 0);
    } catch (err) {
      console.error("❌ Error fetching notes:", err);
    }
  };

  const handleUploadChange = (e) => {
  const { name, value, files } = e.target;
  if (files) {
    if (name === 'image') setPreviewImageUrl(URL.createObjectURL(files[0]));
    setUploadForm({ ...uploadForm, [name]: files[0] });
  } else {
    setUploadForm({ ...uploadForm, [name]: value });
  }
};


const handleUploadSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (!userInfo?.id) return;
  
  formData.append("uploader", userInfo.id);
  formData.append("title", uploadForm.title);
  formData.append("subject", uploadForm.subject);
  if (uploadForm.file) formData.append("file", uploadForm.file);
  if (uploadForm.image) formData.append("image", uploadForm.image);
  formData.append("price", uploadForm.price || 0);

    try {
      await axios.post("https://noteshare-backend-ujbv.onrender.com/upload", formData);
      alert("Note uploaded successfully");
      setShowUploadModal(false);
    } catch (err) {
      alert("Select preview image");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNotes();
    fetchStats();
  }, []);

  return (
    <div id="home-container">

      <section id="welcome">
        <h1>Welcome back, User! 👋</h1>
        <p>Discover new notes, or share your knowledge today.</p>
      </section>

      <section id='count-upload'>
        <div id='count'>
          <div id="count-notes">
            <h2 id="count-num">{notesCount.count}</h2>
            <h3 id="notes-uploaded">Notes Uploaded</h3>
          </div>
          <div id="count-notes">
            <h2 id="count-num">{notesCount.downloads}</h2>
            <h3 id="notes-downloads">Notes Downloads</h3>
          </div>
          <div id="count-notes">
            <h2 id="count-num">{notesCount.views}</h2>
            <h3 id="notes-views">Notes Views</h3>
          </div>
        </div>
        <div id="count-buttons">
          <button id='c-btn' onClick={() => setShowUploadModal(true)}>Upload Notes</button>
          <button id='c-btn' onClick={fetchUserNotes}>My Notes</button>
          <NavLink to='/browse'><button id='c-btn'>Browse all notes</button></NavLink>
        </div>
      </section>

      <section id='latest-popular'>
        <div className="combined-note-card">
          <h2>Your Notes Summary</h2>
          <div className="note-split">
            <div className="note-section">
              <h3>Latest Note</h3>
              {latestNote ? (
                <>
                  <img
                    src={`https://noteshare-backend-ujbv.onrender.com/${latestNote.image?.replace(/\\/g, "/")}`}
                    alt={latestNote.title}
                    className="note-image"
                  />
                  <h4>{latestNote.subject}</h4>
                  <p>Views: {latestNote.views}</p>
                </>
              ) : (
                <p>No recent note found.</p>
              )}
            </div>

            <div className="note-section">
              <h3>Most Popular Note</h3>
              {popularNote ? (
                <>
                  <img
                    src={`https://noteshare-backend-ujbv.onrender.com/${popularNote.image?.replace(/\\/g, "/")}`}
                    alt={popularNote.title}
                    className="note-image"
                  />
                  <h4>{popularNote.subject}</h4>
                  <p>Views: {popularNote.views}</p>
                </>
              ) : (
                <p>No popular note found.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      
       <footer id="footer">
         <div class="footer-container">
           <div class="footer-logo">
             <h2>NoteShare</h2>
             <p>Empowering learners everywhere.</p>
           </div>
           
           <div class="footer-links">
             <a href="aergd">About</a>
             <a href="aergd">Contact</a>
             <a href="aergd">Privacy Policy</a>
             <a href="aergd">Terms</a>
           </div>

           <div class="footer-social">
             <a href="aergd"><i class='bx bxl-twitter'></i></a>
             <a href="aergd"><i class='bx bxl-instagram'></i></a>
             <a href="aergd"><i class='bx bxl-linkedin'></i></a>
             <a href="aergd"><i class='bx bxl-github'></i></a>
           </div>
         </div>

         <div class="footer-bottom">
           <p>&copy; 2025 NoteShare. All rights reserved.</p>
         </div>
       </footer>

      {/* 🔳 My Notes Modal */}
      {showNotesModal && (
        <div id="myNotes" onClick={(e) => {
          if (e.target.id === "myNotes") setShowNotesModal(false);
        }}>
          <div id="myNotes-container">
            <button id="myNotes-btn" onClick={() => setShowNotesModal(false)}>×</button>
            <h2>My Notes</h2>
            <div id="notes-grid">
              {userNotes.length > 0 ? (
                userNotes.map((note, index) => (
                  <div className="note-card" key={index}>
                    <img
                      src={`https://noteshare-backend-ujbv.onrender.com/${note.image?.replace(/\\/g, '/')}`}
                      alt={note.title}
                    />
                    <h4>{note.title}</h4>
                    <p>Views: {note.views}</p>
                    <p>Downloads: {note.downloads}</p>
                  </div>
                ))
              ) : (
                <p>No notes found.</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 📤 Upload Modal */}
      {showUploadModal && (
        <div id="notes-modal-overlay" onClick={(e) => {
          if (e.target.id === "notes-modal-overlay") setShowUploadModal(false);
        }}>
          <div id="notes-modal-container">
            <button id="close-modal-btn" onClick={() => setShowUploadModal(false)}>×</button>
            <h2>Upload New Note</h2>
            <div id="upload-layout">
              <div id="upload-preview">
                {previewImageUrl ? (
                  <img src={previewImageUrl} alt="Preview" />
                ) : (
                  <label htmlFor="image-upload" id="upload-image-btn">Select Preview Image</label>
                )}
                <input
                  type="file"
                  id="image-upload"
                  name="image"
                  style={{ display: 'none' }}
                  accept="image/*"
                  onChange={handleUploadChange}
                />
              </div>

              <div id="upload-form">
                <form onSubmit={handleUploadSubmit} encType="multipart/form-data">
                  <label htmlFor="file-upload" id="upload-btn">Select PDF File</label>
                  <input
                    type="file"
                    id="file-upload"
                    name="file"
                    required
                    accept="application/pdf"
                    onChange={handleUploadChange}
                    style={{ display: 'none' }}
                  />
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    required
                    onChange={handleUploadChange}
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    onChange={handleUploadChange}
                  />
                  {/* <input
                    type="number"
                    name="price"
                    min="0"
                    max="100"
                    style={{ padding: '10px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '6px', marginBottom: '12px', width: '100%' }}
                    placeholder="Price (₹10–₹100 or 0 for free)"
                    onChange={handleUploadChange}
                    required
                  /> */}
                  <button type="submit">Upload Note</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserHomePage;
