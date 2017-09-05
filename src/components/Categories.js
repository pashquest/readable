import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {selectedCategory} from '../actions/categoryActions';


class Categories extends Component {

    /*
selectedCategory = (selectedCategoryValue) => {
        console.log("SELECTVALUE", selectedCategoryValue)
    }
*/    

render() {
        return (
           <div> 
                {(this.props.categories || []).map(category => 
                    <h4 key={category.name}><Link to="/" onClick={(e) => this.props.selectedCategory(category.name)}> {category.name}</Link> </h4>)} 
            </div>             
        )}
}

// Get apps state and pass it as props to Categories
//      > whenever state changes, the Categories will automatically re-render
function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectedCategory: selectedCategory}, dispatch)
 }
// We don't want to return the plain Categories (component) anymore, we want to return the smart Container
//      > Categories is now aware of state and actions
export default connect(mapStateToProps,matchDispatchToProps)(Categories)
