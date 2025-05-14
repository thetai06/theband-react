import './CSS/Band.css';

function Band() {
  return (
    <section className="band-section" id="band">
      <h2 className="band-title">THE BAND</h2>
      <p className="band-subtitle"><em>We love music</em></p>
      <p className="band-desc">
        We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className="band-members">
        <div className="member">
          <p>Name</p>
          <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Member" />
        </div>
        <div className="member">
          <p>Name</p>
          <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Member" />
        </div>
        <div className="member">
          <p>Name</p>
          <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Member" />
        </div>
      </div>
    </section>
  );
}

export default Band;