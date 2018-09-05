import React, { Component } from 'react';
import './style.css';
import Logo from './bg.jpg';

class Nav extends Component {
    state = {
        isActive1: false,
        isActive2: false,
        isActive3: false,
        isActive4: false,
    }
    onClick1 = () => {
        this.setState({
            isActive1: !this.state.isActive1
        })
    }
    onClick2 = () => {
        this.setState({
            isActive2: !this.state.isActive2
        })
    }
    onClick3 = () => {
        this.setState({
            isActive3: !this.state.isActive3
        })
    }
    onClick4 = () => {
        this.setState({
            isActive4: !this.state.isActive4
        })
    }
    render(){
        let btn_class1 = this.state.isActive1 ? 'show1' : 'dropdown-content';
        let btn_class2 = this.state.isActive2 ? 'show2' : 'dropdown-content';
        let btn_class3 = this.state.isActive3 ? 'show3' : 'dropdown-content';
        let btn_class4 = this.state.isActive4 ? 'show4' : 'dropdown-content';

        return(
            <div className='Fit'>
                <h1>I ate at the chef's house</h1>
                <h3>Meet fun people</h3>
                <ul className='group'>
                    <li className='btn-group' onClick={this.onClick1}>
                        <a>
                            <span>Type of events <i className="fa fa-sort-down"></i></span>
                        </a>
                        <div id="myDropdown" className={btn_class1}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </li>
                    <li className='btn-group' onClick={this.onClick2}>
                        <a>
                            <span>Any neighborhood <i className="fa fa-sort-down"></i></span>
                        </a>
                        <div id="myDropdown" className={btn_class2}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </li>
                    <li className='btn-group' onClick={this.onClick3}>
                        <a>
                            <span>Anytime <i className="fa fa-sort-down"></i></span>
                        </a>
                        <div id="myDropdown" className={btn_class3}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </li>
                    <li className='btn-group' onClick={this.onClick4}>
                        <a>
                            <span>Date <i className="fa fa-sort-down"></i></span>
                        </a>
                        <div id="myDropdown" className={btn_class4}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Nav;