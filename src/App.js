import React from 'react';

import { Header, Seasons } from './container';
import { Footer, Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Header />
    <Navbar />
    <Seasons />
    <Footer />
  </div>
);

export default App;