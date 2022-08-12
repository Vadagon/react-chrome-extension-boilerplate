import '../../assets/styles/tailwind.css';
import React from 'react';
import logo from '../../assets/img/logo.svg';
import './index.scss';
import Sample from '../../components/Sample/Sample'





const Newtab = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Newtab/Newtab.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React! <Sample name="Sara" />
        </a>
        <h6 className="text-red-500">color.</h6>
      </header>
    </div>
  );
};

export default Newtab;

