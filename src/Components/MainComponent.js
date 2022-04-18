import React, {Component} from 'react';
import Home from '.HomeComponent';
import Menu from './MenuComponent'
import Contact from './ContactComponent';
import DishDetail from './dishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

import {Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = { //local state definition
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }




  render() { //render() is used to define the view 
    const HomePage = () => {
      return(
        <Home dish= {this.state.dishes.filter((dish) => dish.featured)[0]} 
          promotion= {this.state.promotions.filter((promo) => promo.featured)[0]}
          leader= {this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }
    
    return ( //any function that does not match home or menu will be redirected to home 
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path='/contact' component={Contact}/> 
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
          <Redirect to="/home" /> 
        </Switch>
        <Footer/>
      </div>

    )
  }
}



export default Main;
