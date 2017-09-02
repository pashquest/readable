import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeSort} from '../actions/postsActions';
import _orderBy from 'lodash.orderby' //used for sorting the posts
import moment from 'moment' // used for the timestamp conversion
import { Link } from 'react-router-dom'

class Posts extends Component {

render() {
    let sortedPosts = []   
    //Sorting the Posts and save it in sortedPosts Array
    if(typeof (this.props.posts.posts) !== 'undefined'){
        sortedPosts = _orderBy(this.props.posts.posts,[this.props.posts.sortedBy],["desc"]);
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
                <div>
                    <h3>Sort Posts</h3>
                    <button onClick={(e) => this.props.changeSort("voteScore")}>OrderByVote</button> 
                    <button onClick={(e) => this.props.changeSort("timestamp")}>OrderByTimestamp</button> 
                    <button onClick={(e) => this.props.changeSort("author")}>OrderByAuthor</button> 
                    <br></br>
                    <h3>Add a new Post</h3>
                    {/*used (<NavLink href="/addPost">New Post</NavLink>) which was working also well. 
                    Denn am Anfang hat es nicht mit Link funktioniert, das lag daran weil ich das withRouter bei App.js
                    nicht gemahct hatte. Muss wohl App.js sein, weil diese Component dem BrowserRouter mitgegeben wird*/}
                    <Link to="/addPost">New Post</Link>              
                </div>     
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
function matchDispatchToProps(dispatch){
    // using ES7 object spread proposal (https://github.com/reactjs/redux/issues/363)
     return bindActionCreators({changeSort: changeSort}, dispatch);
  }
// We don't want to return the plain Categories (component) anymore, we want to return the smart Container
//      > Categories is now aware of state and actions
export default connect(mapStateToProps,matchDispatchToProps)(Posts); 
