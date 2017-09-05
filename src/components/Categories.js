import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {selectedCategory} from '../actions/categoryActions';


class Categories extends Component {

/*
selectedCategory = (selectedCategoryValue) => {
        console.log("SELECTVALUE", selectedCategoryValue)
        this.props.selectedCategory(selectedCategoryValue)
    }
   */

render() {
        return (
           <div> 
                {(this.props.categories || []).map(category => 
                <div>
                    <h4 key={category.name}><Link to="/" onClick={(e) => 
                        this.props.selectedCategory(category.name)}> {category.name}</Link> </h4>  
                </div>  
                )
              }      
            </div>             
   )}
}


function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectedCategory: selectedCategory}, dispatch)
 }

export default connect(mapStateToProps,matchDispatchToProps)(Categories)
