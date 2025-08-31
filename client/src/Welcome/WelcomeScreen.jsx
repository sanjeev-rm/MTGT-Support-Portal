import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './WelcomeScreen.styles';

const WelcomeScreen = () => {
  const [isPressed, setIsPressed] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Issue1');
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <img
          src="/envelopewelcomepage.png"
          alt="Envelope with tick"
          style={styles.image}
        />
        <h1 style={styles.heading}>Welcome!</h1>
        <p style={styles.subtext}>You’ve successfully logged in.</p>
        <button
          style={{
            ...styles.button,
            backgroundColor: isPressed ? '#009688' : '#007469',
          }}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => setIsPressed(false)}
          onClick={handleClick}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
