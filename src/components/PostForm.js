// Mainly followed VideODescription https://www.youtube.com/watch?v=c2D-jjVAEf8

import React, { Component } from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import {addPostAsynch} from '../actions/postsActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as readableAPI from '../readableAPI'

class PostForm extends Component {

TitleInput({ input, meta: { touched, error }, ...custom }) {
    return (
      <div>
        <input 
          placeholder="Title..."
          {...input}
          {...custom} />
    </div>
    )
  }
  BodyInput({ input, meta: { touched, error }, ...custom }) {
    return (
      <div>
        <input 
          placeholder="Body..."
          {...input}
          {...custom} />
    </div>
    )
  }
  CategoryInput({ input, meta: { touched, error }, ...custom }) {
    return (
      <div>
        <input 
          placeholder="Category..."
          {...input}
          {...custom} />
    </div>
    )
  }

//values kommt automatisch von unseren Input name values da unten
  submit = (values, dispatch)=>{
    console.log("VALUES", values)
    this.props.addPostAsynch(values)
  }

  /*
  submit({ location }, dispatch) {
    return new Promise((resolve, reject) => {
      dispatch({ 
        type: 'FETCH_WEATHER',
        location,
        resolve,
        reject 
      });
    }).catch((error) => {
      throw new SubmissionError(error);
    });
  }
  */


  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <Field name="title" component={this.TitleInput} /> 
        <Field name="body" component={this.BodyInput} /> 
        <Field name="category" component={this.CategoryInput} /> 
        <br/> 
        <button type="submit">Submit</button>
      </form>
    )
  }
}


//"How do I mapStateToProps or mapDispatchToProps?" here: http://redux-form.com/6.7.0/docs/faq/HowToConnect.md/

const mapStateToProps = (state) => {
  return {
    form: state.form
  }
}

const mapDispatchToProps = (dispatch)  => {
  return bindActionCreators({addPostAsynch: addPostAsynch}, dispatch);
}

/*
function mapStateToProps(state) {
    return {
        form: state.form
    };
  }
  function matchDispatchToProps(dispatch){
     return bindActionCreators({addPostAsynch: addPostAsynch}, dispatch);
  } */
  
PostForm = connect(mapStateToProps, mapDispatchToProps)(PostForm);
  
  export default reduxForm({
    form: 'PostForm' // a unique name for this form
  })(PostForm)