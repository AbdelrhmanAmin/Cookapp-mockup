import React, { Component } from 'react';
import './style.css';

class Nav extends Component {
    render(){
        return(
            <div className='container'>
                <ul className='Father'>
                    <li className='LOGO'>COOKAPP</li>
                    <li className='Sec'>Buenos Aires <i className="fa fa-sort-down"></i></li>
                    <li><i className="fa fa-list-alt"></i> Meals</li>
                    <li className='Meal'><i className="fa fa-shopping-cart"></i> Host a Meal</li>
                    <li onClick={this.props.onLogin}>Login</li>
                    <li onClick={this.props.onRegister}><button>Register</button></li>
                </ul>
            </div>
        );
    }
}
export default Nav;