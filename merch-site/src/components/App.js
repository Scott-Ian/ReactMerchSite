import React from 'react';
import './App.css';
import MerchController from './Merch/MerchController';
import Header from './Header';

function App() {
  return (
    <React.Fragment>
      <div class="container">
        <Header />
        <MerchController />

      </div>
    </React.Fragment>
  );
}

export default App;
