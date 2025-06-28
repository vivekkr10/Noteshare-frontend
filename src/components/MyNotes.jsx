import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/MyNotes.css";
const BASE_URL = process.env.REACT_APP_API_URL;

const UserNotes = () => {
  const [notes, setNotes] = useState([]);
  const [totals, setTotals] = useState({ totalViews: 0, totalDownloads: 0 });

  useEffect(() => {
    const fetchUserNotes = async () => {
      try {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        const userId = userInfo?.id;
        if (!userId) return;

        const res = await axios.get(
          `${BASE_URL}/api/user/notes/user/${userId}`
        );
        setNotes(res.data.notes);
        setTotals({
          totalViews: res.data.totalViews,
          totalDownloads: res.data.totalDownloads,
        });
      } catch (err) {
        console.error("Error fetching user notes", err);
      }
    };

    fetchUserNotes();
  }, []);

  return (
    <div>
      <div id="uploaded-notes-section">
        <h2>Your Uploaded Notes</h2>
        <p>
          <strong>Total Views:</strong> {totals.totalViews}
        </p>
        <p>
          <strong>Total Downloads:</strong> {totals.totalDownloads}
        </p>

        <div id="notes-grid">
          {notes.length > 0 ? (
            notes.map((note, index) => (
              <div className="note-card" key={index}>
                <img
                  src={`${BASE_URL}/${note.image?.replace(/\\/g, "/")}`}
                  alt={note.title}
                />
                <h3>{note.title}</h3>
                <p>
                  <strong>Subject:</strong> {note.subject}
                </p>
                <p>
                  <strong>Views:</strong> {note.views}
                </p>
                <p>
                  <strong>Downloads:</strong> {note.downloads}
                </p>
              </div>
            ))
          ) : (
            <p>No notes found.</p>
          )}
        </div>
      </div>
      <footer id="footer">
        <div class="footer-container">
          <div class="footer-logo">
            <h2>NoteShare</h2>
            <p>Built for students, by students.</p>
          </div>

          <div class="footer-links">
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms</a>
          </div>

          <div class="footer-social">
            <i class="bx bxl-twitter"></i>
            <i class="bx bxl-instagram"></i>
            <i class="bx bxl-linkedin"></i>
          </div>
        </div>

        <div class="footer-bottom">© 2025 NoteShare. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default UserNotes;
