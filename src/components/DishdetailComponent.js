import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  
  renderDish(dish) {
    if (dish != null)
      return (
        //render ra thằng vừa click vào
        <div className="col-md-5">
          <Card>
            <CardImg
              top
              style={{ padding: "10px" }}
              src={dish.img}
              alt={dish.name}
            />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
  }

  renderComment(comments) {
    if (comments == null) {
      return <div></div>;
    }

    const showcmts = comments.map((cmt) => {
      return (
        <li key={cmt.id}>
          <p>{cmt.comment}</p>
          <p>
            --{cmt.author}, &nbsp;
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(cmt.date)))}
          </p>
        </li>
      );
    });
    return (
      <div className="col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">{showcmts}</ul>
      </div>
    );
  }

  render() {
    const dish = this.props.dish;
    const dishItem = this.renderDish(dish);
    // const dishComments = this.renderComment(dish.comments);
    if (dish == null) {
      return <div>Chuwa co gi het</div>;
    }
    const dishComments = this.renderComment(dish.comments);
    // const selectedDish = this.props.selectedDish;
    return (
      <div className="row mt-5 d-flex justify-content-center">
        {dishItem}
        {dishComments}
      </div>
    );
  }
}

export default DishDetail;
