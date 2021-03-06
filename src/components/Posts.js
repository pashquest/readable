import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as PostActions from '../actions/postsActions';
import * as CommentActions from '../actions/commentsActions'
import _orderBy from 'lodash.orderby' //used for sorting the posts
import moment from 'moment' // used for the timestamp conversion
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

class Posts extends Component {

    //API Call to get all Posts
componentDidMount() {
    this.props.getPosts() 
    }

render() {

const getCountComments = (postId) => {
  //  this.props.getPostComments(postId)
  return "0"
}

const votePost = (postId, voteValue) =>{
        this.props.votePostAsynch(postId, voteValue)
        }

const deletePostAndPush = (postId) => {
        this.props.deletePostAsynch(postId)
      //  window.location.reload() //refresh, damit die Posts nochml neu geladen werden.
       }

    let sortedPosts = []  
    console.log("BASSER POSTS props", this.props)

    //Sorting the Posts and save it in sortedPosts Array -  check if array is undefined to avoid an error.
    if(typeof (this.props.posts) !== 'undefined'){
        sortedPosts = _orderBy(this.props.posts,[this.props.sort.postSort],["desc"]);
    }
    //selectedCategory is controlling the filter of the Posts - initialState is all.
    if(this.props.selectedCategory !== "all") {
        sortedPosts = sortedPosts.filter(post => (post.category) === (this.props.selectedCategory))
        }

        return (
           <div> 
               <h1>Posts</h1> 
                {(sortedPosts || []).map(post =>{             
                return(
                <div>    
                    <p><font color="red">Category:</font> {post.category}</p>
                    <p><font color="red">Title:</font><Link to={`/${post.category}/${post.id}`} onClick={(e) => this.props.selectedPost(post)}>{post.title}</Link></p>
                    <p><font color="red">Author:</font> {post.author}</p>
                    <p><font color="red">NumberOfComments:</font> {getCountComments(post.id)} </p>
                    <font color="red">voteScore</font> {post.voteScore} &nbsp;&nbsp;&nbsp;
                    {/*VOTESCORE BUTTONS*/}
                    <button onClick={(e) => votePost(post.id, "upVote")}>Like</button>
                    <button onClick={(e) => votePost(post.id, "downVote")}>Unlike</button> 

                    <p><font color="red">timestamp:</font> {moment(post.timestamp).format('lll')}</p> 
                    <p><font color="red">Deleted:</font> {String(post.deleted)}</p>
                    <button onClick={(e) => deletePostAndPush(post.id)}>Delete Post</button>
                    <p><Link to="/to/add/Post" onClick={(e) => this.props.selectedPost(post)}>Edit Post</Link></p>
                    <p>--------------------------------------------------------------</p> 
                    <br></br>    
                </div> 
                )})
                }
                <div>
                    <h3>Sort Posts</h3>
                    <button onClick={(e) => this.props.changePostsSort("voteScore")}>OrderByVote</button> 
                    <button onClick={(e) => this.props.changePostsSort("timestamp")}>OrderByTimestamp</button> 
                    <button onClick={(e) => this.props.changePostsSort("author")}>OrderByAuthor</button> 
                    <br></br>
                    <h3>Add a new Post</h3>
                    {/*used (<NavLink href="/addPost">New Post</NavLink>) which was working also well. 
                    Denn am Anfang hat es nicht mit Link funktioniert, das lag daran weil ich das withRouter bei App.js
                    nicht gemacht hatte. Muss wohl App.js sein, weil diese Component dem BrowserRouter mitgegeben wird*/}
                    <Button color="secondary"><Link to="/to/add/Post">New Post</Link></Button>              
                </div>     
            </div>             
        )}
}

// Get apps state and pass it as props to Categories
//      > whenever state changes, the Categories will automatically re-render
function mapStateToProps(state) {
    return {
        posts: state.posts,
        sort: state.sort,
        selectedCategory: state.selectedCategory,
        //postComments: state.postComments // auskommentiert weil es zum infinte Loop führt wenn bei NumberComments ein API call mache.
    };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({ ...PostActions, ...CommentActions}, dispatch);
  }
// We don't want to return the plain Categories (component) anymore, we want to return the smart Container
//      > Categories is now aware of state and actions
export default connect(mapStateToProps,matchDispatchToProps)(Posts); 
