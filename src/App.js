import React, { Component } from 'react';
import './App.css';
import * as readableAPI from './readableAPI'
import Categories from './components/Categories'

class App extends Component {
  
/*
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

//to get all Posts of a specific Category
getCategoryPosts = (category) => {
    readableAPI.getCategoryPosts(category).then(CategoryPosts => {this.setState({CategoryPosts}), 
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
*/

  render() {
    return (
      <div className="App">
      <div className = "Category">
      <h1>Title: Categories</h1>  
      <Categories />
      </div>

      <div className = "Posts">
      <h1>Title: Posts</h1>  
      </div>
      </div>
    );
  }
}

export default App;
