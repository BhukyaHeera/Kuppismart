import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = () => {
    // Logic for login (e.g., form validation)
    // After successful login, navigate to the Expense Manager page
    navigate('/expense-manager');
  };

  const handleSignUp = () => {
    // Logic for sign-up (e.g., form validation)
    // After successful sign-up, navigate to the Expense Manager page
    navigate('/expense-manager');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Kuppismart Solutions Private Limited</h1>
      <p style={styles.cin}>CIN: U28212TS2023PTC179394</p>
      <div style={styles.formContainer}>
        {isLogin ? (
          <div>
            <h3>Login</h3>
            <input type="email" placeholder="Email" style={styles.input} />
            <input type="password" placeholder="Password" style={styles.input} />
            <button style={styles.button} onClick={handleLogin}>
              Log in
            </button>
            <p>
              Don't have an account?{' '}
              <span style={styles.link} onClick={toggleAuthMode}>
                Create account
              </span>
            </p>
          </div>
        ) : (
          <div>
            <h3>Create Account</h3>
            <input type="text" placeholder="Name" style={styles.input} />
            <input type="email" placeholder="Email" style={styles.input} />
            <input type="password" placeholder="Password" style={styles.input} />
            <button style={styles.button} onClick={handleSignUp}>
              Sign up
            </button>
            <p>
              Already have an account?{' '}
              <span style={styles.link} onClick={toggleAuthMode}>
                Log in
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    width: '400px',
    margin: '0 auto',
  },
  title: {
    fontSize: '24px',
    color: 'green',
  },
  cin: {
    color: '#333',
  },
  formContainer: {
    marginTop: '20px',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  link: {
    color: 'blue',
    cursor: 'pointer',
  },
};

export default AuthForm;
