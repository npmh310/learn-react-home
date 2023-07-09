import React from "react";
import { Media } from "reactstrap";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({
      selectedDish: dish,
    });
  }
  renderDish(dish) {
    if (dish != null)
      return (
        //render ra thằng vừa click vào
        <div className="col-md-6">
          <Card>
            <CardImg top src={dish.img} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    else
      return (
        <div
          style={{ height: "100px", width: "100px", border: "1px solid black" }}
        >
          chưa có gì hết
        </div>
      );
  }

  render() {
    //   Render ra từng thằng ở trên
    const menu = this.props.dishes.map((ownDish) => {
      return (
        <div className="col-12 col-md-2 m-1">
          <Card key={ownDish.id} onClick={() => this.onDishSelect(ownDish)}>
            <CardImg width="100%" src={ownDish.img} alt={ownDish.name} />
            <CardBody>
              <CardTitle>{ownDish.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
        // </div>
      );
    });
    return (
      <div className="container">
        <div className="row  d-flex justify-content-center">{menu}</div>
        <div className="row mt-5 d-flex justify-content-center">
          {this.renderDish(this.state.selectedDish)}
        </div>
      </div>
    );
  }
}
export default Menu;
