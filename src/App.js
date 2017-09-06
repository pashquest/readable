import React, { Component } from 'react';
import './App.css';
import * as readableAPI from './readableAPI'
import Categories from './components/Categories'
import Posts from './components/Posts'
import {connect} from 'react-redux';
import * as categoriesActions from './actions/categoryActions';
import * as postsActions from './actions/postsActions';
import {bindActionCreators} from 'redux';
import {Route, withRouter } from 'react-router-dom';
import PostForm from './components/PostForm'
import PostDetails from './components/PostDetails'

class App extends Component {

// API Call to get all the Infos initial before the WebSite is rendered. 
  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
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
            <Posts />
        </div> 
        )} />  
        {/*Wenn du ganz simple nur eine Component aufrufen willst, dann nimm das component Attribute*/}
        <Route exact path="/addPost" component={PostForm}/>
        <Route exact path="/postdetails" component={PostDetails} />
      </div> 
      )
  }
}

function matchDispatchToProps(dispatch){
  // using ES7 object spread proposal (https://github.com/reactjs/redux/issues/363)
   return bindActionCreators({...categoriesActions,...postsActions}, dispatch);
}

// the connect accepts  mapStateToProps first. With that i could avoid it. Maybe it would have also worked with null
// like in the PostForm.js
export default withRouter(connect(state => state, matchDispatchToProps)(App));

