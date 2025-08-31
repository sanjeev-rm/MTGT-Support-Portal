import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Popup.styles';

const Popup = () => {
  const [isPressed, setIsPressed] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Issue1');
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <img
          src="/tick.png"
          alt="tick"
          style={styles.image}
        />
        <h1 style={styles.heading}>Issue Submitted Successfully!</h1>
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
          Submit Another
        </button>
      </div>
    </div>
  );
};

export default Popup;
