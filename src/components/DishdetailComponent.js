import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
function RenderDish({ dish }) {
  if (dish != null)
    return (
      //render ra thằng vừa click vào
      <div className="col-md-2">
        <Card>
          <CardImg
            top
            style={{ padding: "10px" }}
            src={dish.image}
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

function RenderComment({ comments }) {
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

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
     
        
       
        <div className="row mt-5 d-flex justify-content-center">
          <RenderDish dish={props.dish} />
          <RenderComment comments={props.dish.comments} />
        </div>
     
    );
  }
};

export default DishDetail;
