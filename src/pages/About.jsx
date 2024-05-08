import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SecurityIcon from '@material-ui/icons/Security';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import backgroundImg from "../assets/background.jpg";

const About = () => {
  return (
    <div style={{ padding: '20px' }}>
      <div 
        style={{
          backgroundImage: `url(${backgroundImg})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
          marginBottom: '20px',
          position: 'relative',
        }}
      >
        <div 
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '20px',
            textAlign: 'left',
            color: '#fff',
            position: 'absolute',
            top: '50%',
            left: '20px', 
            transform: 'translateY(-50%)',
            maxWidth: 'calc(100% - 40px)',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Your Premier Destination for Electronics Shopping.
             <br/> From cutting-edge gadgets to essential accessories,<br /> we offer a curated selection of products <br/> to meet your tech needs.
          </Typography>
        </div>
      </div>
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={4}>
          <ShoppingCartIcon style={{ fontSize: 80, color: '#3f51b5' }} />
          <Typography variant="h6" align="center">Vast Selection</Typography>
          <Typography align="center">Explore a wide range of electronic products</Typography>
        </Grid>
        <Grid item xs={4}>
          <SecurityIcon style={{ fontSize: 80, color: '#4caf50' }} />
          <Typography variant="h6" align="center">Secure Transactions</Typography>
          <Typography align="center">Shop with confidence using our secure payment system</Typography>
        </Grid>
        <Grid item xs={4}>
          <TrendingUpIcon style={{ fontSize: 80, color: '#f44336' }} />
          <Typography variant="h6" align="center">Personalized Recommendations</Typography>
          <Typography align="center">Discover products tailored to your preferences</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
