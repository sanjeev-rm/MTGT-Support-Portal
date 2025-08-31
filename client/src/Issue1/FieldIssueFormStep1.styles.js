const styles = {
  wrapper: {
    backgroundColor: '#ffffff',
    minHeight: '100vh',
    width: '100%',
    fontFamily: 'sans-serif',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    overflow: 'auto'
  },
  header: {
    backgroundColor: '#002877',
    color: 'white',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '30px',
    fontWeight: 'bold'
  },
  row: {
    display: 'flex',
    flexDirection: 'column', // stack on mobile
    alignItems: 'center',
    padding: '20px',
    gap: '20px'
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '100%',
    maxWidth: '400px', // fit phone screen
    margin: 0
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#000'
  },
  dropdown: {
    width: '100%',   // use full width of container
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#d3d3d3',
    border: '1px solid black',
    outline: 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'%23000000\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/></svg>")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center',
    backgroundSize: '16px'
  },
  nextButton: {
    marginTop: '30px',
    width: '100%', // full width
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#007469',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  },
  right: {
    display: 'none' // hide image column
  },
  image: {
    display: 'none' // hide image completely
  }
};

export default styles;
