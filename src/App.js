import React, { Component } from 'react';
import './App.css';
//import * as readableAPI from './readableAPI'
import Categories from './components/Categories'
import Posts from './components/Posts'
import {connect} from 'react-redux';
import * as categoriesActions from './actions/categoryActions';
import * as postsActions from './actions/postsActions';
import {bindActionCreators} from 'redux';

class App extends Component {

//to get all Categories.
/*  
getCategories = () => {
    readableAPI.getCategories ().then(categories => {this.setState({categories}), 
    console.log("State Categorys Action:")
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
*/

// API Call to get all the Books initiall before the WebSite is rendered. 
  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    return (
      <div className="App">
      <div className = "Category">
      <h1>Title: Categories</h1>  
      <Categories />
      </div>

      <div className = "Posts">
      <h1>Title: Posts</h1>  
      <Posts />
      </div>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch){
  // using ES7 object spread proposal (https://github.com/reactjs/redux/issues/363)
   return bindActionCreators({...categoriesActions,...postsActions}, dispatch);
}

// the connect accepts also a mapStateToProps first. With that i could avoid it.
export default connect(state => state, matchDispatchToProps)(App);

