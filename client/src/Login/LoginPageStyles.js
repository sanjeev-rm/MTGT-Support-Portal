const styles = {
    page: {
      height: '100vh',
      width: '100vw',
      backgroundColor: '#f9fafb',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      margin: 0,
      padding: 0,
      overflow: 'hidden'
    },
    content: {
      display: 'flex',
      flexDirection: window.innerWidth < 768 ? 'column' : 'row',
      height: 'calc(100vh - 89px)',
      alignItems: 'center',
      justifyContent: 'center'
    },
    illustration: {
      width: '50%',       // half of container on desktop
      maxWidth: '400px',  // optional max width
      height: 'auto',     // maintain aspect ratio
      objectFit: 'cover',
      margin: 0
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px',
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb'
    },
    headerTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: 0,
      marginLeft: '23%'
    },
    iconContainer: {
      display: 'flex',
      gap: '12px'
    },
    iconCircle: (bgColor) => ({
      width: '48px',
      height: '48px',
      backgroundColor: bgColor,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }),
    formOuter: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: window.innerWidth < 768 ? '16px' : '32px',
      backgroundColor: '#f9fafb',
      width: window.innerWidth < 768 ? '100%' : '50%'
    },
    formContainer: {
      width: '100%',
      maxWidth: '400px'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      padding: '32px'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#172048',
      marginBottom: '32px',
      lineHeight: '1.3'
    },
    inputGroup: {
      marginBottom: '24px'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '8px'
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '16px',
      backgroundColor: '#f9fafb',
      outline: 'none',
      boxSizing: 'border-box',
      color: 'black'
    },
    passwordContainer: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #d1d5db',
        borderRadius: '6px',
        backgroundColor: '#f9fafb',
        padding: '0 12px',
        marginTop: '4px',
      },
      passwordInput: {
        flex: 1,
        padding: '12px 8px',
        border: 'none',
        outline: 'none',
        fontSize: '16px',
        backgroundColor: 'transparent',
        color: 'black',
      },
      eyeButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      
    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '24px'
    },
    checkboxGroup: {
      display: 'flex',
      alignItems: 'center'
    },
    checkbox: {
      width: '16px',
      height: '16px',
      marginRight: '8px'
    },
    checkboxLabel: {
      fontSize: '14px',
      color: '#6b7280'
    },
    forgotLink: {
      fontSize: '14px',
      color: '#3b82f6',
      textDecoration: 'none'
    },
    button: {
      width: '100%',
      backgroundColor: '#3b82f6',
      color: 'white',
      padding: '12px 16px',
      borderRadius: '6px',
      border: 'none',
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer'
    },
    buttonHover: {
      backgroundColor: '#2563eb'
    }
  };
  
  export default styles;
  