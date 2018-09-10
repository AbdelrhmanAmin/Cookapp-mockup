import React, { Component } from 'react';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Recipes from './Components/Recipes';
import data from './Data/Recipes.json';
import './App.css';


class App extends Component {
  state = {
    isBtn1: false,
    isBtn2: false
  }
  onLogin = () => {
    this.setState({
        isBtn1: !this.state.isBtn1
    })
}
  onRegister = () => {
    this.setState({
      isBtn2: !this.state.isBtn2
    })
  }
  onToggle = () => {
    this.setState({
      isBtn1: !this.state.isBtn1,
      isBtn2: !this.state.isBtn2
    })
  }
  render() {
    let login = this.state.isBtn1 ? 'modal-bg' : 'modal-hide';
    let exit1 = this.state.isBtn1 ? 'modal-contents' : 'modal-hide';
    let sign = this.state.isBtn2 ? 'modal-bg' : 'modal-hide';
    let exit2 = this.state.isBtn2 ? 'modal-contents' : 'modal-hide';
    return (
    <div>
      <Nav onLogin={this.onLogin} onRegister={this.onRegister}/>
      <Header />
        <div className={login}>
          <div className={exit1}>
            <div className="close"  onClick={this.onLogin}>+</div>
              <form action="#">
                  <input type="text" placeholder="Name" required/>
                  <input type="email" placeholder="E-Mail" required/>
                  <a href="#" className="button"  onClick={this.onLogin}>Login</a>
              </form>
              <a href='#' onClick={this.onToggle}>Not a user ?</a>
           </div>
        </div>
        <div className={sign}>
          <div className={exit2}>
            <div className="close" onClick={this.onRegister}>+</div>
              <form action="#">
                  <input type="text" placeholder="Name" required/>
                  <input type="email" placeholder="E-Mail" required/>
                  <input type="password" placeholder="password" required/>
                  <a href="#" className="button" onClick={this.onRegister}>Sign Up</a>
              </form>
              <a href='#' onClick={this.onToggle}>Already a member ?</a>
           </div>
        </div>
        <Recipes Recipes={data.Recipes}/>
    </div>);
  }
}

export default App;
