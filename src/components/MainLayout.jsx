// components/MainLayout.jsx
// import { useState } from 'react';
import Navbar from './Navbar';

const MainLayout = ({ children }) => {
  // const [setShowUploadModal] = useState(false);
  // const [setShowNotesModal] = useState(false);

  return (
    <>
      <Navbar
        // onUploadClick={() => setShowUploadModal(true)}
        // onMyNotesClick={() => setShowNotesModal(true)}
      />
      {children}
    </>
  );
};

export default MainLayout;
