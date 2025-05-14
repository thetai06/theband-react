import React, { useState } from 'react';
import './CSS/Slider.css';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=1200&h=600',
    title: 'New York',
    desc: 'The atmosphere in New York is lorem ipsum.'
  },
  {
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=1200&h=600',
    title: 'Paris',
    desc: 'The atmosphere in Paris is lorem ipsum.'
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=1200&h=600',
    title: 'San Francisco',
    desc: 'The atmosphere in San Francisco is lorem ipsum.'
  }
];

function Slider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((current + 1) % slides.length);

  return (
    <div className="slider">
      <img src={slides[current].image} alt={slides[current].title} className="slider-img" />
      <button className="slider-btn left" onClick={prevSlide}>&lt;</button>
      <button className="slider-btn right" onClick={nextSlide}>&gt;</button>
      <div className="slider-caption">
        <h2>{slides[current].title}</h2>
        <p>{slides[current].desc}</p>
      </div>
    </div>
  );
}

export default Slider;