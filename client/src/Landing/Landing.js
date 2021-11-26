import React from "react";
import "./style.css";

const Landing = () => {
  const g1 = () => {
    window.location.href = "/auth/google/";
  };

  return (
    <div>
      <section>
        {/* <input type="checkbox" id="check"> */}
        <header>
          <h2>
            <a href="#" class="logo">
              LeetStore
            </a>
          </h2>

          <label for="check">
            <i class="fas fa-bars menu-btn"></i>
            <i class="fas fa-times close-btn"></i>
          </label>
        </header>
        <div class="content">
          <div class="info">
            <h2>LeetStore </h2>
            <p>A webapp to store leetcode solutions</p>
            <a
              href="#"
              class="info-btn"
              onClick={(e) => {
                e.preventDefault();
                g1();
              }}
            >
              Log In
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
