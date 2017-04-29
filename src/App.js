import React, { Component } from 'react';
import Modal from 'react-modal';
import logo from './logo.svg';
import './App.css';

function LoginForm(props) {
  return (
    <form>
    <h1>Login</h1>
     <label>
       Email:
       <input type="text" name="Email" />
     </label><br></br>
     <label>
       Password:
       <input type="text" name="Password" />
     </label><br></br>
     <a href="#" name="Forgot Password">Forgot Password</a><br></br>
     <input type="submit" value="Submit" /><br></br>
   </form>
  );
}

function ForgetPasswordForm(props) {
  return (
    <form>
    <h1>Forget Password</h1>
     <label>
       Email:
       <input type="text" name="Email" />
     </label><br></br>
     <label>
       Password:
       <input type="text" name="Password" />
     </label><br></br>
     <a href="#" name="Forgot Password">Forgot Password</a><br></br>
     <input type="submit" value="Submit" /><br></br>
   </form>
  );
}

class JoinForm extends Component {
  render() {
    return (
      <form>
        <h1>Join</h1>
         <label>
           Email:
           <input type="text" name="Email" />
         </label><br></br>
         <label>
           Password:
           <input type="text" name="Password" />
         </label><br></br>
         <a href="#" name="Forgot Password">Forgot Password</a><br></br>
         <input type="submit" value="Submit" onSubmit={this.props.onChange}/><br></br>
       </form>
    )
  }
}

class App extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      currentForm: "joinForm"
    };

    // this.handleJoinForm = this.handleJoinForm.bind(this);
    // this.handleLoginForm = this.handleLoginForm.bind(this);
    // this.handleForgetPasswordForm = this.han
    this.handleLinks = this.handleLinks.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
//can you hear me
// no sweat
// what you trying to do

// onClick={this.heandleLinks.bind()}
  handleLinks () {
    // var name = formName;
    this.setState({ currentForm: "loginForm" });
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    // Render a new form every single time the user makes a change.
    let displayedForm = null;
    if (this.state.currentForm === "loginForm") {
      displayedForm = <LoginForm />;
    } else if (this.state.currentForm === "forgetForm") {
      displayedForm = <ForgetPasswordForm />;
    } else if (this.state.currentForm === "joinForm") {
      displayedForm = <JoinForm onChange={this.handleCloseModal}/>;
    } else {
      displayedForm = <h1>Ibrahim</h1>
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <button name="login" onClick={this.handleOpenModal}>Login</button>
        <Modal isOpen={this.state.showModal} contentLabel="Minimal Modal Example" className="Modal"
           overlayClassName="Overlay">
           <div className="Form">
            {displayedForm}
            <a href="#" name="Social Media" onClick={this.handleLinks}>Social Media Link</a><br></br>
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
