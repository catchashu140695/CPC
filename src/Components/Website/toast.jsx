import React, { useState, useEffect } from 'react';

function Toast({ message, type="error", duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Close the toast after `duration`
      document.getElementById('toast').style.display = 'none';
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (

    type==="error"?
    <div id="toast" style={{ display: 'block', position: 'fixed', bottom: '20px', right: '20px', backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px' }}>
      {message}
    </div>:
    <div id="toast" style={{ display: 'block', position: 'fixed', bottom: '20px', right: '20px', backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px' }}>
    {message}
  </div>
  );
}

export default Toast;
