import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import theme, { secondary, white } from './utils/theme';
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundColor: secondary[900], color: white}}>
      <ThemeProvider theme={theme}>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
