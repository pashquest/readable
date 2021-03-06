import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {selectedCategory} from '../actions/categoryActions';
import Posts from './Posts';


class Categories extends Component {
    

render() {
        return (
           <div> 
               <h1>Categories</h1> 
                {(this.props.categories || []).map(category => 
                <div>
                    <h4 key={category.name}><Link to= {`/${category.name}`} onClick={(e) => 
                        this.props.selectedCategory(category.name)}> {category.name}</Link> </h4>  
                </div>  
                )
              }
              <h4><Link to="/" onClick={(e) => 
                this.props.selectedCategory("all")}>Show all Categories Posts</Link> </h4>     
            
            <Posts />

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
