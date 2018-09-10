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
                            <img src={Recipe.Image} alt="x"/>
                        </a>
                            <h1>{Recipe.Title}</h1>
                            <img src={Recipe.Chefimg} alt="x"/>
                            <p>{Recipe.Place}</p>
                            <button>${Recipe.Price}</button>
                    </div>
                </div>
                ))
            }
        </div>
        )
    }
}
export default Recipes ;