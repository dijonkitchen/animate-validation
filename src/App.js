import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      validFields: 0
    }
  }

  handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value
    }, this.handleValidations)

  handleValidations = () => {
    let validFields = 0

    if (this.state.name) {
      validFields += 1
    }
    if (this.state.email) {
      validFields += 1
    }
    if (this.state.message) {
      validFields += 1
    }

    this.setState({ validFields })
  }

  handleSubmit = () => {
    // no-op for example
  }

  render() {
    let buttonClasses = 'button '
    if (this.state.validFields >= 1) {
      buttonClasses += 'validation-1 '
    }
    if (this.state.validFields >= 2) {
      buttonClasses += 'validation-2 '
    }
    if (this.state.validFields >= 3) {
      buttonClasses += 'validation-3'
    }

    return (
      <div className="grid--3x3">
        <form
          className="box--center flex flex--column bg--white padding--med borders--round shadow"
          onSubmit={this.handleSubmit}
        >
          <label>We love mail ✨</label>
          <input
            required
            name="name"
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            required
            name="email"
            type="email"
            placeholder="mail"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            required
            name="message"
            type="text"
            placeholder="message"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <button
            className={buttonClasses}
            type="submit"
          >
            SEND
          </button>
        </form>
      </div>
    );
  }
}

export default App;
