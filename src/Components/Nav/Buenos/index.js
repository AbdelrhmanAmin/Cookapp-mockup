import React, { Component } from 'react';
import './style.css';

class Buenos extends Component {
    render(){
        let btn_class = this.props.state ? 'show' : 'dropdown-content';
        return(
            <div id="myDropdown" className={btn_class}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        )
    }
}
export default Buenos ;