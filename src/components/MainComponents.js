import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponents";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";

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
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <div className="container mt-3">
          <Menu
            dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}
          />
        </div>

        <div className="container mt-3">
          <DishDetail
          // filter dùng để lọc ra đối tượng món ăn theo id
            dish={
              this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]
            }
          />
          {/* <DishDetail selectedDish={this.state.dishes}/> */}
        </div>
      </div>
    );
  }
}

export default Main;
