import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import moment from 'moment' 
import { bindActionCreators } from 'redux';


class PostDetails extends Component {
  render() {
      return (
            <div>
              <p><font color="red">Category:</font> {this.props.selectedPost.category}</p>
              <p><font color="red">Title:</font> {this.props.selectedPost.title}</p>
              <p><font color="red">Author:</font> {this.props.selectedPost.author}</p>
              <p><font color="red">timestamp:</font> {moment(this.props.selectedPost.timestamp).format('lll')}</p>
              <p>--------------------------------------------------------------</p>
              <br></br>

            </div>
          )
        }
}

function mapStateToProps(state) {
  return {
    selectedPost: state.selectedPost
  };
}

// We don't want to return the plain Categories (component) anymore, we want to return the smart Container
//      > Categories is now aware of state and actions
export default connect(mapStateToProps)(PostDetails); 