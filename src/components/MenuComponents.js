import React from "react";
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
  }
  
  //   Render ra từng thằng ở trên
  render() {
    const menu = this.props.dishes.map((ownDish) => {
      return (
        <div className="col-12 col-md-2 m-1">
          <Card key={ownDish.id} onClick={() => this.props.onClick(ownDish.id)}>
            <CardImg
              width="100%"
              style={{ padding: "10px" }}
              src={ownDish.img}
              alt={ownDish.name}
            />
            <CardBody>
              <CardTitle>{ownDish.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });
    return <div className="row  d-flex justify-content-center">{menu}</div>;
  }
}
export default Menu;
