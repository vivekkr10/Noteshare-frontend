import React from "react";
import access from "../images/access.png";
import buyer from "../images/buyer.png";
import heroimage1 from "../images/heroimg1.png";
import heroimage2 from "../images/heroimg2.png";
// import hero from '../images/hero.png';
import member from "../images/member.png";
import seller from "../images/seller.png";
import step1 from "../images/step1.png";
import step2 from "../images/step2.png";
import step3 from "../images/step3.png";
import { NavLink } from "react-router-dom";
import "../css/Home.css";

const Home = () => {
  return (
    <div>
      <section id="nav_bar">
        <div id="container">
          <h1>NOTE SHARE</h1>
          <div className="login-register">
            <NavLink to="/login">
              <button>Log in</button>
            </NavLink>
            <NavLink to="/register">
              <button id="nav_bar_register">Register</button>
            </NavLink>
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
            <NavLink to="/register">
              <button id="register-btn">Get Started</button>
            </NavLink>
            <button className="find">Find</button>
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
            <h1>Access notes on the go!</h1>
            <p>
              Get high-quality study notes delivered to you instantly. NoteShare
              connects students with valuable resources.
            </p>
            <button>Get started</button>
          </div>
          <img src={access} alt="Access Notes" />
        </div>
      </section>

      <footer id="footer">
        <div id="container">
          <div id="subscribe">
            <p>Join our community — subscribe for updates and offers!</p>
            <div id="subscribe-input">
              <input type="text" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
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
          <hr />
          <div class="footer-bottom">
            <p>&copy; 2025 NoteShare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
