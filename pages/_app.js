import '../styles/globals.css'
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useRouter } from 'next/router'
import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Paper } from '@mui/material';
import { useState } from 'react';

function LabelBottomNavigation() {
  const [value, setValue] = useState('login');
  const router = useRouter()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: "100%", backgroundColor: "whitesmoke" }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Sale"
        value="sale"
        onClick={() => { router.push('/sale') }}
        icon={<SellIcon />}
      />
      <BottomNavigationAction
        label="Purchase"
        value="purchase"
        onClick={() => { router.push('/purchase') }}
        icon={<ShoppingCartIcon />}
      />
      <BottomNavigationAction
        label="Look Up"
        value="lookup"
        onClick={() => { router.push('/lookup') }}
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Login" value="Login" onClick={() => { router.push('/login') }} icon={<VpnKeyIcon />} />
    </BottomNavigation>
  );
}

function MyApp({ Component, pageProps }) {
  return <React.Fragment>
    <Component {...pageProps} />
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <LabelBottomNavigation />
    </Paper>
  </React.Fragment>
}

export default MyApp
