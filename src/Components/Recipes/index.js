import React, { Component } from 'react';
import './style.css';

class Recipes extends Component {
    render(){
      return(
        <div className='Recipes'>
                <div className='container-fluid jumbotron'>
                    <div className='row'>
            {
            this.props.Recipes.map( (Recipe) => (
                        <div className="col-xs-6">
                        <div className="content">
                        <a href="#">
                            <img src={Recipe.Image} className='recipe'/>
                        </a>
                            <h1>{Recipe.Title}</h1>
                            <img src={Recipe.Chefimg} className='cheif'/>
                            <p>by {Recipe.Chefname}, in {Recipe.Place}</p>
                            <button>${Recipe.Price}</button>
                            </div>
                    </div>
                ))
            }
            {
                this.props.Recipes2.map ( (Recipe) => (
                        <div className="col-xs-6">
                        <div className="content">
                        <a href="#">
                            <img src={Recipe.Image} className='recipe'/>
                        </a>
                            <h1>{Recipe.Title}</h1>
                            <img src={Recipe.Chefimg} className='cheif'/>
                            <p>by {Recipe.Chefname}, in {Recipe.Place}</p>
                            <button>${Recipe.Price}</button>
                            </div>
                    </div>
                ))
            }
            </div>
        </div>
        </div>
        )
    }
}
export default Recipes ;