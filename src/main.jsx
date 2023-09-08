import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Appbar from './Appbar';
import Card from './Card'


function App() {
  return <div>
    {/* <Button variant='text'>Button</Button>
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
    <Container>
      <Box
        sx={{
          width: 800,
          height: 300,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
    </Container> */}

    <Appbar />
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs={0} md={2}>SideBar</Grid>
        <Grid item xs={12} md={8} sx={{ padding: '20px' }}>
          <Card />
        </Grid>
        <Grid item xs={0} md={8}>RightBar</Grid>
      </Grid>
    </Box>

  </div >;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
