import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import moment from 'moment' // used for the timestamp conversion
import {bindActionCreators} from 'redux';
import * as CommentsActions from "../actions/commentsActions"
import _orderBy from 'lodash.orderby' //used for sorting the Comments
import { Button } from 'reactstrap'



class Comments extends Component {

render() {

let sortedComments = []

//Sorting the Comments and save it in sortedPosts Array -  check if array is undefined to avoid an error.
if(typeof (this.props.postComments) !== 'undefined'){
    sortedComments = _orderBy(this.props.postComments,[this.props.sort.commentsSort],["desc"]);
}
        return (
            <div>   
                <h1>COMMENTS</h1>
                <br></br>    
                {(sortedComments || []).map(postComment =>{             
                return(
                <div>    
                    <p><font color="red">Id:</font> {postComment.id}</p>
                    <p><font color="red">Author:</font> {postComment.author}</p>
                    <p><font color="red">Body:</font> {postComment.body}</p>
                    <p><font color="red">timestamp:</font> {moment(postComment.timestamp).format('lll')}</p> 
                    <p><font color="red">voteScore:</font> {postComment.voteScore}</p>
                    <p><font color="red">Deleted:</font> {String(postComment.deleted)}</p>
                    <p><font color="red">Parent Deleted:</font> {String(postComment.parentDeleted)}</p>
                    <p>--------------------------------------------------------------</p> 
                    <br></br>    
                </div> 
                )})
                }
                <button onClick={(e) => this.props.changeCommentsSort("voteScore")}>OrderByVoteScore</button> 
                <button onClick={(e) => this.props.changeCommentsSort("timestamp")}>OrderByTimeStamp</button> 
                <h3>Add a new Comment</h3>
                <Button color="secondary"><Link to="/addComment">New Comment</Link></Button> 
            </div>             
        )}
}

function mapStateToProps(state) {
    return {
        postComments: state.postComments,
        sort : state.sort
    };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({...CommentsActions}, dispatch);
  }

export default connect(mapStateToProps,matchDispatchToProps)(Comments); 
