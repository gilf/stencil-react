import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    collapseTitle = 'Collapse Me!';

    toggle() {
        this.refs.collapsiblePanel.toggle();
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <collapsible-panel ref="collapsiblePanel" title={this.collapseTitle}>
              <ul>
                <li>Components are awesome!</li>
                <li>They drive the web</li>
              </ul>
          </collapsible-panel>
          <button onClick={this.toggle.bind(this)}>Toggle from outside!</button>
    </div>
    );
  }
}

export default App;
