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
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>We love mail ✨</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="mail"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
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
