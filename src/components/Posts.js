import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as PostActions from '../actions/postsActions';
import _orderBy from 'lodash.orderby' //used for sorting the posts
import moment from 'moment' // used for the timestamp conversion
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

class Posts extends Component {

    //API Call to get al Posts
componentDidMount() {
    this.props.getPosts() 
    }

render() {
    let sortedPosts = []  

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
                {(sortedPosts || []).map(post =>{             
                return(
                <div>    
                    <p><font color="red">Category:</font> {post.category}</p>
                    <p><font color="red">Title:</font><Link to="/postdetails" onClick={(e) => this.props.selectedPost(post)}>{post.title}</Link></p>
                    <p><font color="red">Author:</font> {post.author}</p>
                    <p><font color="red">timestamp:</font> {moment(post.timestamp).format('lll')}</p> 
                    <p><font color="red">Deleted:</font> {String(post.deleted)}</p>
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
                    <Button color="secondary"><Link to="/addPost">New Post</Link></Button>              
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
        selectedCategory: state.selectedCategory
    };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({ ...PostActions}, dispatch);
  }
// We don't want to return the plain Categories (component) anymore, we want to return the smart Container
//      > Categories is now aware of state and actions
export default connect(mapStateToProps,matchDispatchToProps)(Posts); 
