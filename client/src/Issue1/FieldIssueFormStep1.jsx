import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FieldIssueFormStep1.styles';

const FieldIssueFormStep1 = () => {
  const [stores, setStores] = useState([]);
  const [channel, setChannel] = useState('');
  const [issue, setIssue] = useState('');
  const [store, setStore] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedChannel = sessionStorage.getItem('userChannel');
    console.log(storedChannel);
    const userCode = sessionStorage.getItem('userCode');
    console.log(userCode);
    if (storedChannel) setChannel(storedChannel);

    if (userCode) {
      fetch(`http://localhost:3000/api/users/${userCode}/stores`)
        .then(res => res.json())
        .then(data => {
          setStores(data);
          console.log(data); // store full store objects
        })
        .catch(err => {
          console.error('Failed to fetch store codes:', err);
        });
    }
  }, []);

  const handleNext = () => {
    if (!store || !issue) return;

    sessionStorage.setItem("storeCode", store);

    if (issue === 'EFOS') {
      navigate('/issue2');
    } else if (issue === 'Coverage') {
      navigate('/issue3');
    }
  };


  const todayField = 'd' + new Date().getDate(); // e.g. 'd24'

  return (
    <div style={styles.wrapper}>
      <div style={{ ...styles.header, textAlign: 'center', margin: 0 }}>
  SUBMIT A FIELD ISSUE OR CONCERN
</div>
      <div style={styles.row}>
        <div style={styles.left}>
          {/* Show CHANNEL from session and disable */}
          <div style={styles.inputGroup}>
            <div style={styles.label}>YOUR CHANNEL</div>
            <select value={channel} disabled style={styles.dropdown}>
              <option value={channel}>{channel}</option>
            </select>
          </div>

          {/* ISSUE dropdown */}
          <div style={styles.inputGroup}>
            <div style={styles.label}>SELECT YOUR ISSUE</div>
            <select
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              style={{
                ...styles.dropdown,
                color: issue === '' ? '#555' : '#000'
              }}
            >
              <option value="" disabled hidden>EFOS/Coverage</option>
              <option value="EFOS">EFOS</option>
              <option value="Coverage">Coverage</option>
            </select>
          </div>

          {/* STORE dropdown with today check */}
          <div style={styles.inputGroup}>
            <div style={styles.label}>SELECT THE STORE CODE YOU'RE FACING ISSUE</div>
            <select
              value={store}
              onChange={(e) => setStore(e.target.value)}
              style={{
                ...styles.dropdown,
                color: store === '' ? '#555' : '#000'
              }}
            >
              <option value="" disabled hidden>Select Store</option>
              {stores.map((s, idx) => (
                <option
                  key={idx}
                  value={s.store_code}
                  disabled={s[todayField] !== 1}
                >
                  {s.store_code}
                </option>
              ))}
            </select>
          </div>

          <button style={styles.nextButton} onClick={handleNext}>Next</button>
        </div>

        <div style={styles.right}>
          {/* <img src="/girl_sitting.png" alt="Girl working" style={styles.image} /> */}
        </div>
      </div>
    </div>
  );
};

export default FieldIssueFormStep1;
