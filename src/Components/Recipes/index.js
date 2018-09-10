import React, { Component } from 'react';
import './style.css';

class Recipes extends Component {
    render(){
      return(
        <div className='Recipes'>
            {
            this.props.Recipes.map( (Recipe) => (
                <div className='Recipe'>
                    <div className='content'>
                        <a href="#">
                            <img src={Recipe.Chefimg} alt="x"/>
                            <h1>{Recipe.Title}</h1>
                        </a>
                    </div>
                </div>
                ))
            }
        </div>
        )
    }
}
export default Recipes ;