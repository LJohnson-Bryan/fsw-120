import React from 'react';
import './styles.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      inputField: "",
      names: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  

  handleChange(event) {
    this.setState({
      inputField: event.target.value
    });
  }

  submitForm(event) {
    event.preventDefault();
    let newArray = this.state.names;
    newArray.push(this.state.inputField); 
    this.setState({names: newArray, inputField: ""});
  }

  render() {
    let keys = 0;
    const names = this.state.names.map(item => {
      return(<li key={keys++}>{item}</li>)
    });
    return (
      <div className="container">
        <h1>{this.state.inputField}</h1>
        <form name="nameForm" onSubmit={this.submitForm}>
          <input onSubmit={this.value = null} value={this.state.inputField} type="text" placeholder="Enter a name" onChange={this.handleChange}/>
          <button>Submit Name</button>
        </form>
        <ol>
          {names}
        </ol>
      </div>
    );
  }
}

export default App;
