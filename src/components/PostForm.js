// Mainly followed Description of : http://redux-form.com/6.7.0/examples/simple/
import React, { Component } from 'react'
import { Field, reduxForm} from 'redux-form'
import {addPostAsynch, updatePostAsynch,getPosts, removeSelectedPost} from '../actions/postsActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'

{/*BEACHTE: handleSubmit und reset kommt von reduxForm und steht uns deshalb als prop zur Verfügung und die Input component 
kommt auch von reduxform sowie die Field Component, aber man kann da wohl seine eigene Components nutzen called Custome Components.
Mit ReduxForm kommt auch der Wert values, welche automatisch alle Values von den name Attributes in ein Objekt speichert*/}

class PostForm extends Component {

  submit = (values)=>{
    this.props.addPostAsynch(values)
    this.props.history.goBack()
  }
  //Rufe diese Methode auch mit handleSubmit auf, denn nur dann habe ich scheinbar in values alle FormInputs.
  update = (values)=>{
    this.props.updatePostAsynch(values)
    this.props.removeSelectedPost()
    this.props.history.goBack()
  }

  render(){
    const { handleSubmit, reset} = this.props;

    return(
      <form onSubmit={handleSubmit(this.submit)}>
        <h1> POST Formular </h1>
        <br></br>
        <div>
          <label>Title</label>
          <div>
            <Field
              name="title"
              component="input"  
              type="text"
              placeholder="Title"
            />
          </div>
        </div>
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
        <div>
          <label>Category</label>
          <div>
            <Field name="category" component="select">
              <option />
              <option value="react">React</option>
              <option value="redux">Redux</option>
              <option value="udacity">Udacity</option>
            </Field>
          </div>
        </div>
        <br></br>
        <div>
          <button type="submit" >Add Post</button>
          <button><Link to="/">Home</Link></button>
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

PostForm = reduxForm({
  form: 'PostForm'
})(PostForm)


PostForm = connect(
  state => ({
    initialValues: state.selectedPost
  }),
  {addPostAsynch: addPostAsynch, updatePostAsynch: updatePostAsynch, getPosts: getPosts, removeSelectedPost:removeSelectedPost }
)(PostForm)

export default PostForm


/* FRAG MAL NACH wieso as so nicht FUNKTIONIERT 
const mapDispatchToProps = (dispatch)  => {
  return bindActionCreators({addPostAsynch: addPostAsynch, load: selectedPost}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    initialValues: state.selectedPost
  };
}
  
PostForm = connect(mapStateToProps, mapDispatchToProps)(PostForm);
  
  export default reduxForm({
    form: 'PostForm' // a unique name for this form
  })(PostForm)
  */
