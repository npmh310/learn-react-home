import React from "react";
import Menu from "./MenuComponents";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      
    };
  }
  // onDishSelect(dish) {
  //   this.setState({
  //     selectedDish: dish,
  //   });
  // }
  // Home

  render() {
    /* home */
    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }


    //Click theo id
    // router 4
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
// router 6
    // const DishWithId= ()=>{
    //   const {dishId} = useParams();
    //   return(
    //     <DishDetail dish={this.state.dishes.filter((dish)=> dish.id=== parseInt(dishId, 10))[0]}
    //     comments = {this.state.comments.filter((comments) => comments.dishId === parseInt(dishId,10))}/>
    //   )
    // }
    return (
      <div>
        <Header />
        {/* home */}
        
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>}
          />
            <Route path="/contact" component={()=> <Contact/>} />
            <Route path='/menu/:dishId' component={DishWithId} />
          <Redirect to="/home" />
        </Switch>
   

        <div className="container mb-3 ">
          <DishDetail
            // filter dùng để lọc ra đối tượng món ăn theo id
            dish={
              this.state.dishes.filter(
                (dish) => dish.id === this.state.selectedDish
              )[0]
            }
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
