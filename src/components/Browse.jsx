import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/Browse.css";
const BASE_URL = process.env.REACT_APP_API_URL;

const Browse = () => {
  const [notes, setNotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedNote, setSelectedNote] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const limit = 100;

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${BASE_URL}/api/user/notes?page=${currentPage}&limit=${limit}`
        );
        setNotes(res.data.notes);
        setTotalPages(res.data.totalPages);
      } catch (err) {
        console.error("Failed to fetch notes", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, [currentPage]);

  const handleNoteClick = async (id) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const viewedNotes = JSON.parse(localStorage.getItem("viewedNotes") || "{}");

    if (viewedNotes[id]) {
      try {
        const res = await axios.get(`${BASE_URL}/api/user/notes/${id}`);
        setSelectedNote(res.data);
        setShowModal(true);
      } catch (err) {
        console.error("Failed to fetch note details", err);
      }
      return;
    }

    try {
      const res = await axios.get(
        `${BASE_URL}/api/user/${id}?userId=${userInfo?.id}`
      );
      setSelectedNote(res.data);
      setShowModal(true);
      viewedNotes[id] = true;
      localStorage.setItem("viewedNotes", JSON.stringify(viewedNotes));
    } catch (err) {
      console.error("Failed to fetch note details", err);
    }
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleDownload = async (note) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));

      const response = await axios.get(
        `${BASE_URL}/api/user/download/${note._id}?userId=${userInfo?.id}`,
        {
          responseType: "blob",
        }
      );

      const blob = new Blob([response.data]);
      const downloadUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `${note.subject || "note"}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (err) {
      console.error("❌ Download failed", err);
      alert("Download failed.");
    }
  };

  return (
    <div className="browse-container">
      <h2>Browse All Notes</h2>

      {loading ? (
        <div className="modern-loader-container">
          <div className="modern-spinner"></div>
          <p>Loading notes...</p>
        </div>
      ) : (
        <>
          <div className="notes-grid">
            {notes.map((note) => (
              <div
                className="note-card"
                key={note._id}
                onClick={() => handleNoteClick(note._id)}
              >
                <p>{note.uploader?.username}</p>
                <img
                  src={`${BASE_URL}/${note.image.replace(/\\/g, "/")}`}
                  alt={note.title}
                />
                <h4>{note.subject}</h4>
                <p>Views: {note.views}</p>
                <p>Downloads: {note.downloads}</p>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <button
                  key={pageNum}
                  className={pageNum === currentPage ? "active" : ""}
                  onClick={() => goToPage(pageNum)}
                >
                  {pageNum}
                </button>
              )
            )}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}

      {showModal && selectedNote && (
        <div
          id="note-details-overlay"
          onClick={(e) => {
            if (e.target.id === "note-details-overlay") setShowModal(false);
          }}
        >
          <div id="note-details-modal">
            <button
              id="note-details-close-btn"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h3 className="overlay-username">
              {selectedNote.uploader?.username}
            </h3>

            <div id="modal-content-row">
              <img
                id="modal-note-image"
                src={`${BASE_URL}/${selectedNote.image.replace(/\\/g, "/")}`}
                alt="Note Preview"
              />
              <div id="svdu">
                <div id="about-notes">
                  <p>
                    <strong>Title:</strong> {selectedNote.title}
                  </p>
                  <p>
                    <strong>Subject:</strong> {selectedNote.subject}
                  </p>
                  <p>
                    <strong>Views:</strong> {selectedNote.views}
                  </p>
                  <p>
                    <strong>Downloads:</strong> {selectedNote.downloads}
                  </p>
                  <p>
                    <strong>Uploader:</strong> {selectedNote.uploader?.username}
                  </p>
                </div>
                <button id="buy" onClick={() => handleDownload(selectedNote)}>
                  Download
                </button>
                {/* {selectedNote.price > 0 ? (
                  <button id="buy">₹{selectedNote.price}</button>
                ) : (
                  <button id="buy">Free</button>
                )} */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Browse;
