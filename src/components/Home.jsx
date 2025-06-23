import React, { useState } from 'react';
import '../css/Home.css';
import { NavLink } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
const BASE_URL = process.env.REACT_APP_API_URL;

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Toggle state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  

   return (
     <div className="home-container" >
       <section id='nav-bar'>
         <div id="container">
           <div id="nav-bar-wrap">
             <img src="/images/logo.png" alt="Noteshare" id='logo' />
             <div id="menu-icon" onClick={toggleMenu}>
          <span className={menuOpen ? 'line rotate1' : 'line'}></span>
          <span className={menuOpen ? 'line hide' : 'line'}></span>
          <span className={menuOpen ? 'line rotate2' : 'line'}></span>
        </div>
             <div id="buttons" className={menuOpen ? "show" : ""}>
                 <a href='#home' id='btn'>Home</a>
                 <button id='btn'>Notes</button>
                 <a href='#pricing-section' id='btn'>Pricing</a>
                 <a href='#footer' id='btn'>About</a>
                 <NavLink className={'a'} style={{ textDecoration: 'none' }} to={'/login'}><button id='btn-login'>Login</button></NavLink>
              </div>
             </div>
         </div>
       </section>

       <section id='home'>
         <div id="container">
           <div id="get-started">
             <p>Turn your notes into knowledge and your knowledge into impact.</p>
             <NavLink className={'a'} style={{ textDecoration: 'none' }} to={'/register'}><button>Get Started</button></NavLink>
           </div>
           <img src="/images/hero_image.png" alt="" id='hero_image'/>
         </div>
       </section>

       <section id="features-section">
          <h2 id="section-title">What You Can Do on NoteShare</h2>
          <div id="features-grid">
    
            <div id="feature-card">
              <div className='bx bx-upload' id="icon"></div>
              <h3>Upload Notes</h3>
              <p>Share your notes and help others. Upload PDFs, images, or handwritten scans in seconds.</p>
            </div>
    
            <div id="feature-card">
              <div className='bx bx-download' id="icon"></div>
              <h3>View & Download</h3>
              <p>Browse high-quality notes from other students. Download and study anytime, anywhere.</p>
            </div>
    
            <div id="feature-card">
              <div className='bx bx-coin-stack' id="icon"></div>
              <h3>Earn Rewards</h3>
              <p>Earn coins or recognition when your notes get downloaded or upvoted by others.</p>
            </div>
    
            <div id="feature-card">
              <div className='bx bx-search' id="icon"></div>
              <h3>Search by Subject</h3>
              <p>Quickly find notes by subject, class, board, or keyword with our smart search feature.</p>
            </div>
          </div>
       </section>
       
       <section id="how-it-works">
         <h2 id="section-title">How It Works</h2>
         <div id="steps-grid">

           <div id="step-card">
             <div id="step-number">1</div>
             <h3>Create Account</h3>
             <p>Sign up using your email or Google to start uploading notes.</p>
           </div>

           <div id="step-card">
             <div id="step-number">2</div>
             <h3>Upload Notes</h3>
             <p>Share your study material by uploading PDFs or scanned images.</p>
           </div>

           <div id="step-card">
             <div id="step-number">3</div>
             <h3>Share & Earn</h3>
             <p>Let others download your notes and earn rewards or points.</p>
           </div>

           <div id="step-card">
             <div id="step-number">4</div>
             <h3>Track Analytics</h3>
             <p>View how many times your notes are viewed, downloaded, and liked.</p>
           </div>

         </div>
       </section>
       
       <section id="benefits-section">
         <h2 id="section-title">Why Choose NoteShare?</h2>
         <div id="benefits-list">

           <div id="benefit-card">
             <i id='bx bx-smile'></i>
             <h3>Free to Start, Easy to Use</h3>
             <p>Create your account in seconds and start uploading or downloading notes without hassle.</p>
           </div>

           <div id="benefit-card">
             <i id='bx bx-bar-chart-alt-2'></i>
             <h3>Grow Your Reach</h3>
             <p>Publish your notes and reach thousands of students across boards and exams.</p>
           </div>

           <div id="benefit-card">
             <i id='bx bx-group'></i>
             <h3>Community of Learners</h3>
             <p>Join a helpful and growing community of students sharing and helping each other.</p>
           </div>
         </div>
       </section>
       
       <section id="testimonial-section">
         <h2 id="testimonial-title">What Students Say</h2>
         <div id="testimonial-cards">

           <div class="testimonial-card">
             <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
             <p class="testimonial-text">“NoteShare helped me ace my exams! I found exactly the notes I needed for NEET.”</p>
             <h4 class="testimonial-author">— Priya, Class 12</h4>
           </div>

           <div class="testimonial-card">
             <div class="testimonial-stars">⭐⭐⭐⭐</div>
             <p class="testimonial-text">“Uploading my notes was super easy, and I even earned rewards. Great for sharing!”</p>
             <h4 class="testimonial-author">— Ankit, JEE Aspirant</h4>
           </div>

           <div class="testimonial-card">
             <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
             <p class="testimonial-text">“Amazing community! Everyone helps each other and the notes are high quality.”</p>
             <h4 class="testimonial-author">— Sneha, B.Com 2nd Year</h4>
           </div>

         </div>
       </section>
       
        {/* <section id="pricing-section">
         <h2 id="pricing-title">Choose Your Plan</h2>
         <p id="pricing-subtitle">You can always start for free</p>
         <div id="pricing-cards">

           <div class="pricing-card">
             <h3>Free</h3>
             <p class="price">₹0/month</p>
             <ul class="features">
               <li>✔ Upload Notes</li>
               <li>✔ Download Public Notes</li>
               <li>✔ Join Study Community</li>
             </ul>
             <button class="pricing-btn">Get Started</button>
           </div>

           <div class="pricing-card featured">
             <h3>Premium</h3>
             <p class="price">₹199/month</p>
             <ul class="features">
               <li>✔ Everything in Free</li>
               <li>✔ Highlighted Profile</li>
               <li>✔ Advanced Analytics</li>
               <li>✔ Early Access to Top Notes</li>
             </ul>
             <button class="pricing-btn">Upgrade Now</button>
           </div>

         </div>
       </section> */}

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
     </div>
  );
};

export default Home;