import React, { useState } from 'react';
import styles from './FieldIssueFormStep2.styles';
import { useNavigate } from 'react-router-dom';

const issuesList = [
  "Visit Exception",
  "Bandh",
  "Internet Not working",
  "Store Closed",
  "Big Day Working",
  "PC Meeting",
  "MTAS-CDM Meeting",
  "Store Permission Issue",
  "Store under Renovation",
  "HHT Not Allowed"
];

const FieldIssueFormStep2 = () => {
  const [selected, setSelected] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const user_code = sessionStorage.getItem('userCode');
    const store_code = sessionStorage.getItem('storeCode');
    const type = 'EFOS';
    const reason = selected;
    const today = new Date().toISOString().split('T')[0]; 
    const date = today;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!user_code || !store_code || !reason) {
      alert('Missing info. Please try again.');
      return;
    }

    try {
      const res = await fetch(`${apiUrl}/api/complaints`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_code, store_code, type, reason, date })
      });

      if (res.status === 201) {
        navigate('/submission');
      } else {
        const data = await res.json();
        alert(data.error || 'Submission failed');
      }
    } catch (err) {
      alert('Something went wrong. Try again later.');
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>SUBMIT A FIELD ISSUE OR CONCERN</div>
      <div style={styles.main}>
        <div style={styles.left}>
          <h2 style={styles.title}>EFOS</h2>
          <div style={styles.listContainer}>
            {issuesList.map((issue, index) => (
              <button
                key={index}
                onClick={() => setSelected(issue)}
                style={{
                  ...styles.issueButton,
                  background: selected === issue
                    ? 'linear-gradient(135deg, #1e3a8a, #2563eb)'
                    : '#002877',
                  border: selected === issue
                    ? '3px solid #22d3ee'
                    : '2px solid transparent',
                  boxShadow: selected === issue
                    ? '0 4px 10px rgba(34, 211, 238, 0.4)'
                    : 'none',
                  fontWeight: selected === issue ? 'bold' : 'normal',
                  color: '#fff',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                {issue}
              </button>
            ))}
          </div>

          {/* Submit button below all options */}
          <button
            style={{
              ...styles.submitButton,
              backgroundColor: selected ? styles.submitButton.backgroundColor : '#ccc',
              cursor: selected ? 'pointer' : 'not-allowed'
            }}
            onClick={handleSubmit}
            disabled={!selected}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default FieldIssueFormStep2;
