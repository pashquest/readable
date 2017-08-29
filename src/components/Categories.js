import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getCategories} from '../actions/categoryActions';


class Categories extends Component {
render() {
        return (
           <div> 
                {(this.props.categories.categories || []).map(category => <h4 key={category.name}>{category.name}</h4>) } 
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



// Get actions and pass them as props to to Categories
//      > now Categories has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({getCategories: getCategories}, dispatch);
}


// We don't want to return the plain Categories (component) anymore, we want to return the smart Container
//      > Categories is now aware of state and actions
export default connect(mapStateToProps,matchDispatchToProps)(Categories); 
