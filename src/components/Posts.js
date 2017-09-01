import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getPosts} from '../actions/postsActions';
import _orderBy from 'lodash.orderby' //used for sorting the posts
import moment from 'moment' // used for the timestamp conversion


class Posts extends Component {

render() {

    let sortedPosts = []
    
    //Sorting the Pots and save it in sortedPosts Array
    if(typeof (this.props.posts.posts) != 'undefined'){
        sortedPosts = _orderBy(this.props.posts.posts,["voteScore"],["desc"]);
    }
        return (
           <div> 
                {(sortedPosts || []).map(post =>{             
                return(
                <ol key = {post.id}>
                    <h4 key={post.id}><strong>id:</strong> {post.id} </h4>
                    <h4> <font color="red">timestamp:</font> {moment(post.timestamp).format('lll')}</h4>
                    <h4> <font color="red">Title:</font> {post.title}</h4>
                    <h4><font color="red">body:</font> {post.body}</h4>
                    <h4><font color="red">Author:</font> {post.author}</h4>
                    <h4><font color="red">Category:</font> {post.category}</h4>
                    <h4><font color="red">VoteScore</font> {post.voteScore}</h4>
                    <h4><font color="red">Deleted:</font>{post.deleted} </h4>
                </ol>
                )}) 
                }
            </div>             
        )}
}

// Get apps state and pass it as props to Categories
//      > whenever state changes, the Categories will automatically re-render
function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

// We don't want to return the plain Categories (component) anymore, we want to return the smart Container
//      > Categories is now aware of state and actions
export default connect(mapStateToProps)(Posts); 
