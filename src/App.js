import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as readableAPI from './readableAPI'

class App extends Component {
  state = {categories: [],
    posts: [],
    CategoryPosts: []
  }

//to get all Categories.
getCategories = () => {
    readableAPI.getCategories ().then(categories => {this.setState({categories}), 
    console.log("State Categorys:", this.state.categories)
    })
  }
//to get all Posts.
getPosts = () => {
    readableAPI.getPosts().then(posts => {this.setState({posts}), 
    console.log("State Posts:", this.state.posts)
    })
  }

getCategoryPosts = (category) => {
    readableAPI.getCategoryPosts().then(CategoryPosts => {this.setState({CategoryPosts}), 
    console.log("State CategoryPosts:", this.state.CategoryPosts)
    console.log("Category Input:", category)
    })
  }

// API Call to get all the Books initiall before the WebSite is rendered. 
  componentDidMount() {
    this.getCategories(),
    this.getPosts(),
    this.getCategoryPosts("FrontEnd")
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

       {(this.state.posts).map(post => (
          <h3>{post.id}</h3>
       ))}

      </div>
    );
  }
}

export default App;
