import React, { Component } from 'react';
import Modal from 'react-modal';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <button name="login" onClick={this.handleOpenModal}>Login</button>
        <Modal isOpen={this.state.showModal} contentLabel="Minimal Modal Example" className="Modal"
           overlayClassName="Overlay">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>
        <p className="App-intro">
          Ibrahim <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
