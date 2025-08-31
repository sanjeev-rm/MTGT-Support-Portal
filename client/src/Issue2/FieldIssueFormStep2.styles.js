const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: 'white',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column'
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
    textAlign: 'center',
    margin: 0
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column', // stack on mobile
    alignItems: 'center',
    padding: '20px',
    gap: '20px'
  },
  left: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    width: '100%',
    maxWidth: '400px',
    gap: '15px'
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
    gap: '10px',
    maxHeight: '60vh',
    overflowY: 'auto',
    width: '100%'
  },
  issueButton: {
    width: '100%',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out'
  },
  right: {
    display: 'none' // remove the image column completely
  },
  image: {
    display: 'none' // hide image
  },
  submitButton: {
    width: '100%',
    maxWidth: '400px', // match left column width
    backgroundColor: '#007B5E',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '20px', // space from last issue button
    alignSelf: 'center' // center the button
  }
};

export default styles;
