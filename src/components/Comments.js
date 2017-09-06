import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import moment from 'moment' // used for the timestamp conversion
import {bindActionCreators} from 'redux';


class Comments extends Component {

render() {
    console.log("postComments",this.props.postComments)
        return (
            <div>   
                <h1>COMMENTS</h1>
                <br></br>    
                {(this.props.postComments || []).map(postComment =>{             
                return(
                <div>    
                    <p><font color="red">Id:</font> {postComment.id}</p>
                    <p><font color="red">Author:</font> {postComment.author}</p>
                    <p><font color="red">timestamp:</font> {moment(postComment.timestamp).format('lll')}</p> 
                    <p>--------------------------------------------------------------</p> 
                    <br></br>    
                </div> 
                )})
                }
            </div>             
        )}
}

function mapStateToProps(state) {
    return {
        postComments: state.postComments
    };
}
/*
function matchDispatchToProps(dispatch){
  return bindActionCreators(null, dispatch);
  }*/

export default connect(mapStateToProps)(Comments); 
