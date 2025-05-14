import React, { useState } from 'react';
import './CSS/Tour.css';

const tours = [
  {
    city: 'New york',
    date: 'Fri 27 Nov 2016',
    desc: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
    img: 'https://www.w3schools.com/w3images/newyork.jpg',
    soldOut: false,
    ticketsLeft: 3,
  },
  {
    city: 'Paris',
    date: 'Fri 27 Nov 2016',
    desc: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
    img: 'https://www.w3schools.com/w3images/paris.jpg',
    soldOut: false,
    ticketsLeft: 0,
  },
  {
    city: 'San Francisco',
    date: 'Fri 27 Nov 2016',
    desc: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
    img: 'https://www.w3schools.com/w3images/sanfran.jpg',
    soldOut: false,
    ticketsLeft: 0,
  },
];

function Tour() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="tour-section" id="tour">
      <h2 className="tour-title">TOUR DATES</h2>
      <p className="tour-subtitle"><em>Remember to book your tickets!</em></p>
      <div className="tour-table">
        <div className="tour-row">
          <span>September</span>
          <span className="sold-out">Sold out</span>
        </div>
        <div className="tour-row">
          <span>October</span>
          <span className="sold-out">Sold out</span>
        </div>
        <div className="tour-row">
          <span>November</span>
          <span className="tickets-left">3</span>
        </div>
      </div>
      <div className="tour-cards">
        {tours.map((tour, idx) => (
          <div className="tour-card" key={idx}>
            <img src={tour.img} alt={tour.city} />
            <div className="tour-card-content">
              <h3>{tour.city}</h3>
              <p className="tour-date">{tour.date}</p>
              <p>{tour.desc}</p>
              <button className="buy-btn" onClick={() => setShowModal(true)}>
                Buy Tickets
              </button>
            </div>
          </div>
        ))}
      </div>
      {showModal && <TicketModal onClose={() => setShowModal(false)} />}
    </section>
  );
}

function TicketModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-ticket">
        <div className="modal-header">
          <span className="modal-title">
            <span role="img" aria-label="ticket" style={{marginRight: 8}}>🛒</span>
            Tickets
          </span>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <label className="modal-label">
            <span role="img" aria-label="ticket" style={{marginRight: 8}}>🛒</span>
            Tickets, $15 pre person
          </label>
          <input className="modal-input" type="number" placeholder="How many?" min="1" />
          <label className="modal-label">
            <span role="img" aria-label="user" style={{marginRight: 8}}>👤</span>
            Send to
          </label>
          <input className="modal-input" type="email" placeholder="Enter email..." />
          <button className="modal-pay-btn">pay ✓</button>
        </div>
        <div className="modal-footer">
          <span>need <a href="#">help?</a></span>
        </div>
      </div>
    </div>
  );
}

export default Tour;