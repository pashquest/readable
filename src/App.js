import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as readableAPI from './readableAPI'

class App extends Component {
  state = {categories: [],
    tanzen: []
  }

//to get all Categories.
getCategories = () => {
    readableAPI.get().then(categories => {this.setState({categories}), 
    console.log("AusApp heraus: ", categories),
    console.log("State:", this.state.categories)
    })
  }

// API Call to get all the Books initiall before the WebSite is rendered.
  componentDidMount() {
    this.getCategories()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Basser</h2>
        </div>
        {(this.state.categories).map(category => (
           <h1>{category.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
