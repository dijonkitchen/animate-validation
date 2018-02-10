import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value
    })

  handleSubmit = () => {
    // no-op for example
  }

  render() {
    return (
      <div className="grid--3x3">
        <form
          className="box--center flex flex--column bg--white padding--med"
          onSubmit={this.handleSubmit}
        >
          <label>We love mail ✨</label>
          <input
            className="bold"
            name="name"
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            className="bold"
            name="email"
            type="email"
            placeholder="mail"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            className="bold"
            name="message"
            type="text"
            placeholder="message"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="SEND"
          />
        </form>
      </div>
    );
  }
}

export default App;
