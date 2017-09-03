import React, { Component } from 'react';
import './App.css';
import * as readableAPI from './readableAPI'
import Categories from './components/Categories'
import Posts from './components/Posts'
//import AddPost from './components/AddPost'
import {connect} from 'react-redux';
import * as categoriesActions from './actions/categoryActions';
import * as postsActions from './actions/postsActions';
import {bindActionCreators} from 'redux';
import {Route, withRouter } from 'react-router-dom';
import PostForm from './components/PostForm'
//import SimpleForm from './components/SimpleForm'
import uuidv1 from 'uuid'

class App extends Component {

//to get all Categories.

addPostAsynch = (post) => {
    const id = uuidv1()
    const timestamp = Date.now()
    post = {
        id,
        timestamp,
        ...post
    }
   // readableAPI.addPost()
   readableAPI.addPost(post)
}
/*
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
    //this.addPostAsynch({title: "Hallo", body: "Alles Kack ehier", category: "react", })
  }

  render() {
    return (
      <div className="App">
        {/*Mit dem render Attrobute kannst du jetzt einfach das gesamte in die Route packen, vergiss am Ende das "/>" nicht*/}
        <Route exact path="/" render={()=>(
        <div>
            <h1>Title: Categories</h1>  
                <Categories />
            <h1>Title: Posts</h1>  
            <button onClick={(e) => this.addPostAsynch({title: "DirectInput", body: "Alles Kack ehier", category: "react", })} >Interface Call</button>
            <Posts />
        </div> 
        )} />  
        {/*Wenn du ganz simple nur eine Component aufrufen willst, dann nimm das component Attribute*/}
        <Route exact path="/addPost" component={PostForm}/>
      </div> 
      )
  }
}

function matchDispatchToProps(dispatch){
  // using ES7 object spread proposal (https://github.com/reactjs/redux/issues/363)
   return bindActionCreators({...categoriesActions,...postsActions}, dispatch);
}

// the connect accepts also a mapStateToProps first. With that i could avoid it.
export default withRouter(connect(state => state, matchDispatchToProps)(App));

