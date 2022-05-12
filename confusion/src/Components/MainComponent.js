import React, {Component} from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent'
import Contact from './ContactComponent';
import DishDetail from './dishdetailComponent';
import About from './AboutComponent';
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

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0] } 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    const AboutUs = () => {
      return (
        <About leaders = {this.state.leaders}/>
      )
    }
    
    return ( //any function that does not match home or menu will be redirected to home 
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path='/contact' component={Contact}/> 
          <Route exact path="/aboutus" component={AboutUs}/>
          <Redirect to="/home" /> 
        </Switch>
        <Footer/>
      </div>

    )
  }
}



export default Main;