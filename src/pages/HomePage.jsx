import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  // const featuresRef = useRef(null);
  const heroRef = useRef(null);
  const testimonialsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.5
      }
    );
    // observer.observe(featuresRef.current);
    observer.observe(heroRef.current);
    observer.observe(testimonialsRef.current);
  }, []);

  const handleTestimonialsHover = () => {
    setIsVisible(true);
  };

  const handleTestimonialsLeave = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <div className="hero" ref={heroRef}>
        <h1>Welcome to Fernando Meditation!</h1>
        <p>Find your inner peace with our guided meditation sessions.</p>
        <Link to="/meditation">
          <button>Start a Session</button>
          <div>
            <Link to="/meditation-log">View Meditation Log</Link>
          </div>
        </Link>
      </div>
      <div className="benefits">
        <h2>The Benefits of Meditation</h2>
        <p>Meditation has been shown to reduce stress and anxiety, improve focus and concentration, and promote overall well-being. Our app makes it easy to get started with guided meditation sessions that are tailored to your needs.</p>
      </div>
      <div className="features">
        <h2>Our Features</h2>
          <p>Choose from a variety of guided meditation sessions</p>
          <p>Track your progress with our meditation log</p>
          <p>Customize your sessions with different backgrounds and sounds</p>
          <p>Set reminders to meditate at regular intervals</p>
        <Link to="/meditation">
          <button>Start Meditating Today</button>
        </Link>
      </div>
      <div className="testimonials" ref={testimonialsRef}>
        <h2 onMouseEnter={handleTestimonialsHover} onMouseLeave={handleTestimonialsLeave} className={isVisible ? 'visible' : ''}>What Our Users Are Saying</h2>
        <div className="testimonial" onMouseEnter={handleTestimonialsHover} onMouseLeave={handleTestimonialsLeave}>
          <img src='data:image/jpeg;base64,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' alt="User 1" />
          <p>"I've been using this app for a few weeks now and I already feel more relaxed and focused. The guided meditations are really helpful, especially when I'm feeling stressed out."</p>
          <p>- Jane S.</p>
        </div>
        <div className="testimonial" onMouseEnter={handleTestimonialsHover} onMouseLeave={handleTestimonialsLeave}>
          <img src='https://deadline.com/wp-content/uploads/2020/11/Stephen-Lang-Headshot-Matt-Sayles-e1605093774374.jpg' alt="User 2" />
          <p>"I've tried other meditation apps before, but this one is by far the best. The interface is easy to use and the sessions are top-notch."</p>
          <p>- Tom R.</p>
        </div>
        <div className="testimonial" onMouseEnter={handleTestimonialsHover} onMouseLeave={handleTestimonialsLeave}>
          <img src='https://images.unsplash.com/photo-1555888997-03e986fc157b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b2xkJTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt="User 3" />
          <p>"I find it hard to make time for myself, but this app has made it easier for me to incorporate meditation into my daily routine. I appreciate the variety of sessions and the progress tracking."</p>
          <p>- Mark D.</p>
        </div>
        <div className="testimonial" onMouseEnter={handleTestimonialsHover} onMouseLeave={handleTestimonialsLeave}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/5/53/Lisa_S.jpg' alt="User 4" />
          <p>"This app has helped me establish a daily meditation practice. I appreciate the variety of sessions and the option to customize them to fit my needs."</p>
          <p>- Lisa K.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;