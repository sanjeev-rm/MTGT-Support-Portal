import React, { useState } from 'react';
import { Eye, EyeOff, ShoppingCart, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPageStyles';

export const Header = () => (
  <header style={styles.header}>
    <h1 style={styles.headerTitle}>MTGT Portal</h1>
    <div style={styles.iconContainer}>
      <div style={styles.iconCircle('#5eead4')}>
        <ShoppingCart size={24} color="white" />
      </div>
      <div style={styles.iconCircle('#14b8a6')}>
        <Lock size={24} color="white" />
      </div>
    </div>
  </header>
);

export const LoginForm = () => {
  const [userCode, setUserCode] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await fetch(`${apiUrl}/api/users/${userCode}`);

      if (!res.ok) {
        alert("User not found!");
        return;
      }

      const data = await res.json();
      console.log("User found:", data);

      // Fake password check
      if (password !== "mtgt") {
        alert("Invalid password. Try using 'mtgt' for now.");
        return;
      }

      // Store channel in sessionStorage
      sessionStorage.setItem("userChannel", data.channel);
      sessionStorage.setItem("userCode", userCode);
      navigate("/welcome");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Something went wrong during login.");
    }
  };


  return (
    <div style={styles.formOuter}>
      <div style={styles.formContainer}>
        <div style={styles.card}>
          <h2 style={styles.title}>
            Welcome to MTGT<br />Support Portal
          </h2>

          <div>
            {/* User Code Input */}
            <div style={styles.inputGroup}>
              <label htmlFor="userCode" style={styles.label}>User Code</label>
              <input
                id="userCode"
                type="text"
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                style={styles.input}
              />
            </div>

            {/* Password Input with Eye Toggle */}
            <div style={styles.inputGroup}>
              <label htmlFor="password" style={styles.label}>Password</label>
              <div style={styles.passwordContainer}>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={styles.passwordInput}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={styles.eyeButton}
                >

                </button>
              </div>
            </div>

            {/* Remember Me + Forgot Password */}
            <div style={styles.checkboxContainer}>
              <div style={styles.checkboxGroup}>
                <input
                  id="rememberMe"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={styles.checkbox}
                />
                <label htmlFor="rememberMe" style={styles.checkboxLabel}>Remember me</label>
              </div>
              <a href="#" style={styles.forgotLink}>Forgot password?</a>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              style={styles.button}
              onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
