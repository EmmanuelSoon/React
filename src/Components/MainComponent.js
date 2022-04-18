import React, {Component} from 'react';
import Home from '.HomeComponent';
import Menu from './MenuComponent'
import DishDetail from './dishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import {Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = { //local state definition
      dishes: DISHES,
    };
  }




  render() { //render() is used to define the view 
    const HomePage = () => {
      return(
        <Home />
      );
    }
    
    return ( //any function that does not match home or menu will be redirected to home 
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
          <Redirect to="/home" /> 
        </Switch>
        <Footer/>
      </div>

    )
  }
}



export default Main;
