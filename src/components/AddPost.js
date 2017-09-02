import React, {Component} from 'react';
//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import {getCategories} from '../actions/categoryActions';


class AddPost extends Component {
render() {
        return (
           <div> 
                HALLO du bist im AddPost
            </div>             
        )}
}

// Get apps state and pass it as props to Categories
//      > whenever state changes, the Categories will automatically re-render
function mapStateToProps(state) {
    return {
        categories: state.categories
    };
}

// We don't want to return the plain Categories (component) anymore, we want to return the smart Container
//      > Categories is now aware of state and actions
export default connect(mapStateToProps)(AddPost); 
