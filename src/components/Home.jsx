// // import React, { useState } from 'react';
// import '../css/Home.css';
// import '../css/Global.css';
// import { NavLink } from 'react-router-dom';
// import 'boxicons/css/boxicons.min.css';
// import logo from '../images/logo.png'
// import hero_image from '../images/hero-image.png'

// const Home = () => {
//   // const [menuOpen, setMenuOpen] = useState(false); // Toggle state

//   // const toggleMenu = () => {
//   //   setMenuOpen(!menuOpen);
//   // };
  

//    return (
//      <div className="home-container" >
//         <section id="nav-bar">
//       <div id="nav-bar-container">
//         <img src={logo} alt="Noteshare" id="logo" />

//         {/* Hidden on small screens, shown on larger screens */}
//         <div id="nav-bar-buttons">
//           <a href="#home" id="nav-btn">Home</a>
//           <NavLink to="/register" style={{ textDecoration: 'none' }}>
//             <button id="nav-btn">Notes</button>
//           </NavLink>
//           <a href="#pricing-section" id="nav-btn">Pricing</a>
//           <a href="#footer" id="nav-btn">About</a>
//         </div>

//         {/* Always visible login button */}
//         <NavLink to="/login" style={{ textDecoration: 'none' }}>
//           <button id="btn-login" className="tap-effect">Login</button>
//         </NavLink>
//       </div>
//     </section>

//        <section id='hero'>
//          <div id="hero-container">
//            <div id="get-started">
//              <p>Turn your notes into knowledge and your knowledge into impact.</p>
//              <NavLink className={'a'} style={{ textDecoration: 'none' }} to={'/register'}><button id='btn-get-started'>Get Started</button></NavLink>
//            </div>
//            <img src={hero_image} alt="" id='hero-image'/>
//          </div>
//        </section>

//        <section id="features-section">
//           <h2 id="section-title">What You Can Do on NoteShare</h2>
//           <div id="features-grid">
    
//             <div id="feature-card">
//               <div className='bx bx-upload' id="icon"></div>
//               <h3>Upload Notes</h3>
//               <p>Share your notes and help others. Upload PDFs, images, or handwritten scans in seconds.</p>
//             </div>
    
//             <div id="feature-card">
//               <div className='bx bx-download' id="icon"></div>
//               <h3>View & Download</h3>
//               <p>Browse high-quality notes from other students. Download and study anytime, anywhere.</p>
//             </div>
    
//             <div id="feature-card">
//               <div className='bx bx-coin-stack' id="icon"></div>
//               <h3>Earn Rewards</h3>
//               <p>Earn coins or recognition when your notes get downloaded or upvoted by others.</p>
//             </div>
    
//             <div id="feature-card">
//               <div className='bx bx-search' id="icon"></div>
//               <h3>Search by Subject</h3>
//               <p>Quickly find notes by subject, class, board, or keyword with our smart search feature.</p>
//             </div>
//           </div>
//        </section>
       
//        <section id="how-it-works">
//          <h2 id="section-title">How It Works</h2>
//          <div id="steps-grid">

//            <div id="step-card">
//              <div id="step-number">1</div>
//              <h3>Create Account</h3>
//              <p>Sign up using your email or Google to start uploading notes.</p>
//            </div>

//            <div id="step-card">
//              <div id="step-number">2</div>
//              <h3>Upload Notes</h3>
//              <p>Share your study material by uploading PDFs or scanned images.</p>
//            </div>

//            <div id="step-card">
//              <div id="step-number">3</div>
//              <h3>Share & Earn</h3>
//              <p>Let others download your notes and earn rewards or points.</p>
//            </div>

//            <div id="step-card">
//              <div id="step-number">4</div>
//              <h3>Track Analytics</h3>
//              <p>View how many times your notes are viewed, downloaded, and liked.</p>
//            </div>

//          </div>
//        </section>
       
//        <section id="benefits-section">
//          <h2 id="section-title">Why Choose NoteShare?</h2>
//          <div id="benefits-list">

//            <div id="benefit-card">
//              <i id='bx bx-smile'></i>
//              <h3>Free to Start, Easy to Use</h3>
//              <p>Create your account in seconds and start uploading or downloading notes without hassle.</p>
//            </div>

//            <div id="benefit-card">
//              <i id='bx bx-bar-chart-alt-2'></i>
//              <h3>Grow Your Reach</h3>
//              <p>Publish your notes and reach thousands of students across boards and exams.</p>
//            </div>

//            <div id="benefit-card">
//              <i id='bx bx-group'></i>
//              <h3>Community of Learners</h3>
//              <p>Join a helpful and growing community of students sharing and helping each other.</p>
//            </div>
//          </div>
//        </section>
       
//        <section id="testimonial-section">
//          <h2 id="testimonial-title">What Students Say</h2>
//          <div id="testimonial-cards">

//            <div class="testimonial-card">
//              <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
//              <p class="testimonial-text">“NoteShare helped me ace my exams! I found exactly the notes I needed for NEET.”</p>
//              <h4 class="testimonial-author">— Priya, Class 12</h4>
//            </div>

//            <div class="testimonial-card">
//              <div class="testimonial-stars">⭐⭐⭐⭐</div>
//              <p class="testimonial-text">“Uploading my notes was super easy, and I even earned rewards. Great for sharing!”</p>
//              <h4 class="testimonial-author">— Ankit, JEE Aspirant</h4>
//            </div>

//            <div class="testimonial-card">
//              <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
//              <p class="testimonial-text">“Amazing community! Everyone helps each other and the notes are high quality.”</p>
//              <h4 class="testimonial-author">— Sneha, B.Com 2nd Year</h4>
//            </div>

//          </div>
//        </section>
       
//         {/* <section id="pricing-section">
//          <h2 id="pricing-title">Choose Your Plan</h2>
//          <p id="pricing-subtitle">You can always start for free</p>
//          <div id="pricing-cards">

//            <div class="pricing-card">
//              <h3>Free</h3>
//              <p class="price">₹0/month</p>
//              <ul class="features">
//                <li>✔ Upload Notes</li>
//                <li>✔ Download Public Notes</li>
//                <li>✔ Join Study Community</li>
//              </ul>
//              <button class="pricing-btn">Get Started</button>
//            </div>

//            <div class="pricing-card featured">
//              <h3>Premium</h3>
//              <p class="price">₹199/month</p>
//              <ul class="features">
//                <li>✔ Everything in Free</li>
//                <li>✔ Highlighted Profile</li>
//                <li>✔ Advanced Analytics</li>
//                <li>✔ Early Access to Top Notes</li>
//              </ul>
//              <button class="pricing-btn">Upgrade Now</button>
//            </div>

//          </div>
//        </section> */}

//        <footer id="footer">
//          <div class="footer-container">
//            <div class="footer-logo">
//              <h2>NoteShare</h2>
//              <p>Empowering learners everywhere.</p>
//            </div>
           
//            <div class="footer-links">
//              <a href="aergd">About</a>
//              <a href="aergd">Contact</a>
//              <a href="aergd">Privacy Policy</a>
//              <a href="aergd">Terms</a>
//            </div>

//            <div class="footer-social">
//              <a href="aergd"><i class='bx bxl-twitter'></i></a>
//              <a href="aergd"><i class='bx bxl-instagram'></i></a>
//              <a href="aergd"><i class='bx bxl-linkedin'></i></a>
//              <a href="aergd"><i class='bx bxl-github'></i></a>
//            </div>
//          </div>

//          <div class="footer-bottom">
//            <p>&copy; 2025 NoteShare. All rights reserved.</p>
//          </div>
//        </footer>
//      </div>
//   );
// };

// export default Home;

import React from 'react';
import access from '../images/access.png';
import buyer from '../images/buyer.png';
import heroimage1 from '../images/heroimg1.png';
import heroimage2 from '../images/heroimg2.png';
// import hero from '../images/hero.png';
import member from '../images/member.png';
import seller from '../images/seller.png';
import step1 from '../images/step1.png';
import step2 from '../images/step2.png';
import step3 from '../images/step3.png';
import { NavLink } from 'react-router-dom';
import '../css/Home.css'

const Home = () => {
  return (
    <div>
      <section id="nav-bar">
        <div id="container">
          <h1>NOTE SHARE</h1>
          <div className="login-register">
            <NavLink to="/login"><button>Log in</button></NavLink>
            <NavLink to="/register"><button>Register</button></NavLink>
          </div>
        </div>
      </section>

      <section id="hero">
        <div id="container">
          <div className="text-img">
            <img src={heroimage1} alt="Hero 1" />
            <div className="h1">
              <h1>The easiest way to buy</h1>
              <h1>and sell notes</h1>
            </div>
          </div>
          <div className="search">
            <input type="text" placeholder="Search notes" />
            <button>Find</button>
            <img src={heroimage2} alt="Hero 2" />
          </div>
        </div>
      </section>

      <section id="how-it-works">
        <h1>How it works</h1>
        <div id="container">
          <div className="steps">
            <img src={step1} alt="Step 1" />
            <h2>Step 1</h2>
            <p>Upload your notes. Share your knowledge with others.</p>
          </div>
          <div className="steps">
            <img src={step2} alt="Step 2" />
            <h2>Step 2</h2>
            <p>Browse available notes and preview them before buying.</p>
          </div>
          <div className="steps">
            <img src={step3} alt="Step 3" />
            <h2>Step 3</h2>
            <p>Complete your purchase easily and access your notes.</p>
          </div>
        </div>
      </section>

      <section id="join-noteshare">
        <h1>Join NoteShare</h1>
        <div id="container">
          <div className="noteshare">
            <img src={seller} alt="Seller" />
            <div className="as-a-seller">
              <h2>As a seller</h2>
              <p>Earn money by sharing your study notes with students.</p>
              <button>Start selling</button>
            </div>
          </div>
          <div className="noteshare">
            <img src={buyer} alt="Buyer" />
            <div className="as-a-seller">
              <h2>As a buyer</h2>
              <p>Find the best notes for your studies at affordable prices.</p>
              <button>Start buying</button>
            </div>
          </div>
          <div className="noteshare">
            <img src={member} alt="Member" />
            <div className="as-a-seller">
              <h2>As a team member</h2>
              <p>Join a community dedicated to academic success.</p>
              <button>Join the team</button>
            </div>
          </div>
        </div>
      </section>

      <section id="access">
        <div id="container">
          <div className="access-notes">
            <h2>Access notes on the go!</h2>
            <pre>
              Get high-quality study notes delivered to you instantly.{"\n"}
              NoteShare connects students with valuable resources.
            </pre>
            <button>Get started</button>
          </div>
          <img src={access} alt="Access Notes" />
        </div>
      </section>

      <footer id="footer">
        <div id="container">
          <div id="subscribe">
            <p>Join our community — subscribe for updates and offers!</p>
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <hr />
          <div id="footer-div">
            <div id="icons">
              <h3>NoteShare</h3>
            </div>
            <div id="footer-wrap">
              <div id="support">
                <h3>Support</h3>
                <p>Help Center</p>
                <p>User Support</p>
                <p>Tutorials</p>
              </div>
              <div id="resources">
                <h3>Resources</h3>
                <p>Terms of Service</p>
                <p>Site Map</p>
                <p>About Management</p>
              </div>
              <div id="get-in-touch">
                <h3>Get in touch</h3>
                <p>support@noteshare.com</p>
                <p>+91 1234567890</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;