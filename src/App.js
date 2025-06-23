import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import VerifyOTP from './components/VerifyOTP';
import Login from './components/LoginPage';
import UserHomePage from './components/UserHomePage';
import SetUsername from './components/SetUsername';
import MyNotes from './components/MyNotes';
import Browse from './components/Browse';
import MainLayout from './components/MainLayout';
import UserProfile from './components/UserProfile';


function App() {
  return (
    <div className="App">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verifyOtp" element={<VerifyOTP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/set-username" element={<SetUsername />} />
        <Route path='/userProfile/:id' element={<UserProfile />} />

        {/* Authenticated Pages with Navbar Layout */}
        <Route path="/userHomePage" element={ <MainLayout> <UserHomePage /> </MainLayout> } />
        <Route path="/my-notes" element={<MainLayout> <MyNotes /> </MainLayout>} />
        <Route path="/browse" element={<MainLayout> <Browse /> </MainLayout>} />
      </Routes>
    </div>
  );
}

export default App;
