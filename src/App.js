import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component {
  componentDidMount() {
    $(() => {
      window.recurly.configure({
        publicKey: "ewr1-mzq0x6rWIma79YHS1vIP3c",
        fields: {
          all: {
            style: {
              fontFamily: 'Droid Sans',
              fontSize: '14px',
              fontColor: 'green',
              fontWeight: 'bold',
              fontVariant: 'small-caps',
              fontStyle: 'italic',
              lineHeight: '1em',
              placeholder: {
                color: 'gray !important',
                fontWeight: 'bold'
              }
            }
          }
        }
      });
    });

  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <form id="recurly_form">

          <div data-recurly="number"></div>
          <div data-recurly="month"></div>
          <div data-recurly="year"></div>
          <div data-recurly="cvv"></div>
          <button onClick={this.handleFormSubmit} >
            Place order
          </button>
        </form>

      </div>
    );
  }
}

export default App;
