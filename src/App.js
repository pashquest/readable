import React, { Component } from 'react';
import './App.css';
import Categories from './components/Categories'
import Posts from './components/Posts'
import {connect} from 'react-redux';
import * as categoriesActions from './actions/categoryActions';
import * as postsActions from './actions/postsActions';
import {bindActionCreators} from 'redux';
import {Route, withRouter, Switch } from 'react-router-dom';
import PostForm from './components/PostForm'
import CommentForm from './components/CommentForm'
import PostDetails from './components/PostDetails'
import Comments from './components/Comments'

class App extends Component {

// API Call to get all the Infos initial before the WebSite is rendered. 
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <div className="App">
        {/*Mit dem render Attrobute kannst du jetzt einfach das gesamte in die Route packen, vergiss am Ende das "/>" nicht BEDENKE
        Du hast dann komischerweise die history property nicht. Diese hat man nur wenn Route path mit component nutzt. KOMISCH*/}
        <Route exact path="/" component={Categories}/>
        <Route exact path="/:categories" component={Categories}/>
        <Route exact path="/:categories/:postId" component={PostDetails}/>
        <Route exact path="/:categories/:postId" component={Comments}/>

        {/*Wenn du ganz simple nur eine Component aufrufen willst, dann nimm das component Attribute*/}
        <Route exact path="/to/add/Post" component={PostForm}/>
        <Route exact path="/to/add/Comment" component={CommentForm}/>
        
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

