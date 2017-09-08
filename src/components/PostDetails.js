import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import moment from 'moment' 
import * as CommentActions from '../actions/commentsActions'
import {deletePostAsynch, getPosts} from '../actions/postsActions'
import { bindActionCreators } from 'redux'
import Comments from './Comments'



class PostDetails extends Component {

// API Call to get all the Infos initial before the WebSite is rendered. 
componentDidMount() {
    this.props.getPostComments(this.props.selectedPost.id);
  }

// Call the API so the freshState of alle the Posts gets loaded into the state.
componentWillUnmount() {
   this.props.getPosts()
  }

render() {
//METHPD TO CALL
const deletePostAndPush = () => {
      this.props.deletePostAsynch(this.props.selectedPost.id)
      this.props.history.push("/");
     }

      return (
            <div>
              <h1>Post Details</h1>
              <p><font color="red">Category:</font> {this.props.selectedPost.category}</p>
              <p><font color="red">Title:</font> {this.props.selectedPost.title}</p>
              <p><font color="red">Author:</font> {this.props.selectedPost.author}</p>
              <p><font color="red">timestamp:</font> {moment(this.props.selectedPost.timestamp).format('lll')}</p>
              <p><font color="red">Deleted:</font> {String(this.props.selectedPost.deleted)}</p>
              <br></br>
              <button onClick={(e) => deletePostAndPush()}>DELETE Post</button>
              <button onClick={(e) => console.log("Edit POST")}>Edit Post</button> 
              <br></br>
              <Comments />
            </div>
          )
        }
}

function mapStateToProps(state) {
  return {
    selectedPost: state.selectedPost
  };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({ deletePostAsynch: deletePostAsynch,...CommentActions, getPosts: getPosts }, dispatch);
    }

export default connect(mapStateToProps,matchDispatchToProps)(PostDetails); 