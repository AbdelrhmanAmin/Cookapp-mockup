import React, { Component } from 'react';
import './style.css';
import Buenos from './Buenos';

class Nav extends Component {
    state = {
        isActive: false
    }
    onClick = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }
    render(){
        return(
            <div className='container'>
                <ul className='Father'>
                    <li className='LOGO'>COOKAPP</li>
                    <li className='Sec' onClick={this.onClick}>
                    Buenos Aires 
                    <i className="fa fa-sort-down"></i>
                        <Buenos state={this.state.isActive}/>
                    </li>
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