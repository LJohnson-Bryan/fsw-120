import React from 'react';
import Badge from './components/Badge';
import Form from './components/Form';
import Error from './components/Error';
import './styles.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = { 
        error: false,
        errorMessage: "",
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: 0,
        favoriteFood: "",
        responseText: "",
        data: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    
    event.preventDefault();

    // Validation Code
    let invalidKeys = []
    for (const [key, value] of Object.entries(this.state)) {
      if(value.length < 3 || value === "" || value === 0) {
        invalidKeys.push(key);
        if(key === "id" || key === "errorMessage" || key ==="data") {
          invalidKeys.pop();
        }
      }
      // Form is set to number, but in the case the value is not a number, push it into invalidKeys array
      if(key === "phone") {
        if(value.length !== 10) {
          invalidKeys.push(key);
        }
        const isANumber = isNaN(value) === false;
        !isANumber && invalidKeys.push(key);
      }
    }

    console.log(invalidKeys);

    // Validation complete, submit form if the array is empty
    if(invalidKeys.length === 0) {
      this.setState({error: false});
      this.setState(prevState => {
        return {
          data: [
            ...prevState.data,
            {
              id: prevState.id++,
              firstName: prevState.firstName,
              lastName: prevState.lastName,
              email: prevState.email,
              placeOfBirth: prevState.placeOfBirth,
              phone: prevState.phone,
              favoriteFood: prevState.favoriteFood,
              responseText: prevState.responseText
            }
          ]
        }
      });
      this.resetState();
      document.querySelector('form').reset();
    } else {
      this.setState({error: true, errorMessage: `The following fields are invalid, please correct them: ${invalidKeys.join(', ')}`})
    }
  }

  resetState() {
    this.setState({
      error: false,
      errorMessage: "",
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phone: 0,
      favoriteFood: "",
      responseText: ""
    })
  }

    render() {
      let colorAlternate = false;
      const badges = this.state.data.map(item => {
        colorAlternate = !colorAlternate;
        return(
          <Badge color={colorAlternate ? "red" : "blue"} data={item} key={item.id}/>
        );
      })
      return(
        <div>
          {this.state.error && <Error message={this.state.errorMessage}/>}
          <Form handleSubmit={this.handleSubmit.bind(this)} handleChange={this.handleChange.bind(this)}/>
          {badges}
        </div>
      );
    }
}

export default App;
