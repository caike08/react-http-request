import React from 'react';

import { GetRequest, GetRequestHooks, GetRequestAsyncAwait, GetRequestErrorHandling, GetRequestSetHeaders } from './components';

import logo from './logo.svg';
import './App.scss';

const App = ( ) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div>
        <h4 className="p-2 text-center">React HTTP GET Requests with Fetch</h4>
        <GetRequest />
        <GetRequestHooks />
        <GetRequestAsyncAwait />
        <GetRequestErrorHandling />
        <GetRequestSetHeaders />
      </div>
    </div>
  );
}

export default App;
