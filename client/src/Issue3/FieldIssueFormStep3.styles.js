const styles = {
  container: {
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: 'white',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },
  header: {
    backgroundColor: '#002877',
    color: 'white',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column', // stack vertically on mobile
    overflow: 'auto',
    padding: '20px'
  },
  left: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#002877',
    textAlign: 'center'
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '100%',
    maxWidth: '400px', // keeps buttons from stretching too much
  },
  issueButton: {
    width: '100%',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    color: 'white',
  },
  submitButton: {
    width: '100%',
    maxWidth: '400px',
    padding: '12px',
    backgroundColor: '#007B5E',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '20px'
  },
};

export default styles;
