// Mainly followed Description of : http://redux-form.com/6.7.0/examples/simple/
import React, { Component } from 'react'
import { Field, reduxForm} from 'redux-form'
import {addPostAsynch} from '../actions/postsActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'

{/*BEACHTE: handleSubmit und reset kommt von reduxForm und steht uns deshalb als prop zur Verfügung und die Input component 
kommt auch von reduxform sowie die Field Component, aber man kann da wohl seine eigene Components nutzen called Custome Components.
Mit ReduxForm kommt auch der Wert values, welche automatisch alle Values von den name Attributes in ein Objekt speichert*/}

class PostForm extends Component {

  submit = (values)=>{
    this.props.addPostAsynch(values)
  }

  render(){
    const { handleSubmit, reset} = this.props;

    return(
      <form onSubmit={handleSubmit(this.submit)}>
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
          <label>Favorite Color</label>
          <div>
            <Field name="category" component="select">
              <option />
              <option value="FrontEnd">FrontEnd</option>
              <option value="BackEnd">BackEnd</option>
              <option value="Blockchain">Blockchain</option>
            </Field>
          </div>
        </div>
        <br></br>
        <div>
          <button type="submit" >Submit</button>
          <button type="button" onClick={reset}> Clear Values</button>
          <button><Link to="/">Back</Link></button>
        </div>
      </form>

    )
  }
}


//"How do I mapStateToProps or mapDispatchToProps?" here: http://redux-form.com/6.7.0/docs/faq/HowToConnect.md/
// Da ich state nicht benötige nehme ich es raus, aber muss in connect null einfügen, weil er satet als erstes erwartet oder ich mach sowas
//  wie in App.js connect(state => state, matchDispatchToProps) - Aber das scehint wohl nur gehen weil dort mein mapDispatchToProps eine function ist
const mapDispatchToProps = (dispatch)  => {
  return bindActionCreators({addPostAsynch: addPostAsynch}, dispatch);
}
  
PostForm = connect(null, mapDispatchToProps)(PostForm);
  
  export default reduxForm({
    form: 'PostForm' // a unique name for this form
  })(PostForm)