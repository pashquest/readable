// Mainly followed Description of : http://redux-form.com/6.7.0/examples/simple/
import React, { Component } from 'react'
import { Field, reduxForm} from 'redux-form'
import {addCommentAsynch, updateCommentAsynch} from '../actions/commentsActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'

{/*BEACHTE: handleSubmit und reset kommt von reduxForm und steht uns deshalb als prop zur Verfügung und die Input component 
kommt auch von reduxform sowie die Field Component, aber man kann da wohl seine eigene Components nutzen called Custome Components.
Mit ReduxForm kommt auch der Wert values, welche automatisch alle Values von den name Attributes in ein Objekt speichert*/}

class CommentForm extends Component {

  submit = (values )=>{
    this.props.addCommentAsynch(values, this.props.selectedPost.id)
    this.props.history.push("/postdetails");
  }
  //Rufe diese Methode auch mit handleSubmit auf, denn nur dann habe ich scheinbar in values alle FormInputs.
  update = (values)=>{
    this.props.updateCommentAsynch(values)
    this.props.history.push("/postdetails");
  }

  render(){
    const { handleSubmit, reset} = this.props;
    console.log("BASSER CommentForm props", this.props)

    return(
      <form onSubmit={handleSubmit(this.submit)}>
        <h1> Comment Formular </h1>
        <br></br>
        <div>
          <label>Body</label>
          <div>
            <Field
              name="body"
              component="input"  
              type="text"
              placeholder="Body"
            />
          </div>
        </div>
        <div>
          <label>Author</label>
          <div>
            <Field
              name="author"
              component="input"
              type="text"
              placeholder="Author"
            />
          </div>
        </div>
        <br></br>
        <div>
          <button type="submit" >Add Comment</button>
          <button><Link to="/postdetails">Post Details</Link></button>
          <button type="button" onClick={handleSubmit(this.update)}> Update Post</button>
        </div>
      </form>

    )
  }
}


//"How do I mapStateToProps or mapDispatchToProps?" here: http://redux-form.com/6.7.0/docs/faq/HowToConnect.md/
// Da ich state nicht benötige nehme ich es raus, aber muss in connect null einfügen, weil er satet als erstes erwartet oder ich mach sowas
//  wie in App.js connect(state => state, matchDispatchToProps) - Aber das scehint wohl nur gehen weil dort mein mapDispatchToProps eine function ist
// Update: Weil diese nicht so ganz mit den initialValues funktionierte, musste ich das umgestalten. So wie das hier beschrieben ist:
// http://redux-form.com/6.0.0-alpha.4/examples/initializeFromState/  Habe die addPostAsynch() noch hinzugefügt. FortheSake um Fertig zu werden.

CommentForm = reduxForm({
  form: 'CommentForm'
})(CommentForm)


CommentForm = connect(
  state => ({
    initialValues: state.selectedComment, 
    selectedPost: state.selectedPost
  }), {addCommentAsynch: addCommentAsynch, updateCommentAsynch: updateCommentAsynch}
)(CommentForm)

export default CommentForm
