import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Content from './components/Content';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from '@mui/material/styles'; // Import createTheme
import theme from './styles/index';
import { itemData } from './components/data';
import MenuDrawer from './components/Drawer';

const App = () => {
  const [isDrawer, setIsDrawer] = useState(false);
  return (
    <div className="App">
      <ThemeProvider theme={useTheme(theme)}>
        <Header setIsDrawer={setIsDrawer} />
        <Banner />
        <Content data={itemData} />{' '}
        {/* Pass itemData as a prop to Content component */}
        <Footer />
        <MenuDrawer isDrawer={isDrawer} setIsDrawer={setIsDrawer} />
      </ThemeProvider>
    </div>
  );
};

export default App;
