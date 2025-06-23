// components/MainLayout.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';

const MainLayout = ({ children }) => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);

  return (
    <>
      <Navbar
        onUploadClick={() => setShowUploadModal(true)}
        onMyNotesClick={() => setShowNotesModal(true)}
      />
      {children}
      {/* Optional: Handle modals globally here if needed */}
    </>
  );
};

export default MainLayout;
