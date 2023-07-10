import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponents";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }
  onDishSelect(dish) {
    this.setState({
      selectedDish: dish,
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="container mt-3">
          <Menu
            dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}
          />
        </div>

        <div className="container mb-3 ">
          <DishDetail
          // filter dùng để lọc ra đối tượng món ăn theo id
            dish={
              this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]
            }
          />
            </div>
            <Footer/>
      </div>
    );
  }
}

export default Main;
