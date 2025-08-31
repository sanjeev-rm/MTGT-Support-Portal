import React, { useState, useEffect } from 'react';
import { Header, LoginForm } from './LoginItems';
import styles from './LoginPageStyles';

const LoginPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pageStyle = styles.page;
  const contentStyle = { 
    ...styles.content, 
    flexDirection: isMobile ? 'column' : 'row' 
  };
  const illustrationStyle = { 
    ...styles.illustration, 
    width: isMobile ? '100%' : '50%' 
  };
  const formOuterStyle = { 
    ...styles.formOuter, 
    width: isMobile ? '100%' : '50%' 
  };

  return (
    <div style={pageStyle}>
      {/* <Header /> */}
      <div style={contentStyle}>
        {/* <img style={illustrationStyle} src="/girl_standing.png" alt="Login illustration" /> */}
        <div style={formOuterStyle}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
