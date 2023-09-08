import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from '@mui/material/Button';

function App() {
  return <div>
    <Button variant='text'>Button</Button>
    <Button variant='contained' >Button</Button>
    <Button variant='contained' disabled>Button</Button>
    <Button variant='outlined'>Button</Button>

    <Button variant='contained' color='primary'>Button</Button>
    <Button variant='contained' color='secondary'>Button</Button>
    <Button variant='contained' color='success'>Button</Button>
    <Button
      variant='contained'
      color='error'
      onClick={() => alert('Error')}
      sx={{ padding: '10px', marginTop: '20px', borderRadius: '10px' }}
    >
      Button
    </Button>

  </div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
