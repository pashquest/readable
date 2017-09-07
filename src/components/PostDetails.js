import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import moment from 'moment' 
import * as CommentActions from '../actions/commentsActions'
import { bindActionCreators } from 'redux';
import Comments from './Comments';



class PostDetails extends Component {

// API Call to get all the Infos initial before the WebSite is rendered. 
componentDidMount() {
    this.props.getPostComments(this.props.selectedPost.id);
  }

  render() {
      return (
            <div>
              <h1>Post Details</h1>
              <p><font color="red">Category:</font> {this.props.selectedPost.category}</p>
              <p><font color="red">Title:</font> {this.props.selectedPost.title}</p>
              <p><font color="red">Author:</font> {this.props.selectedPost.author}</p>
              <p><font color="red">timestamp:</font> {moment(this.props.selectedPost.timestamp).format('lll')}</p>
              <br></br>
              <button onClick={(e) => console.log("EDIT POST")}>Edit Post</button> 
               <button onClick={(e) => console.log("Delete POST")}>Delete Post</button> 
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
    return bindActionCreators({ ...CommentActions}, dispatch);
    }

export default connect(mapStateToProps,matchDispatchToProps)(PostDetails); 