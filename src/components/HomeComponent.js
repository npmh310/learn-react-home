import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  CardText,
} from "reactstrap";

function RenderCard({ item }) {
  return (
    <div>
          <Card>
            <CardImg width="100%"
          style={{ padding: "10px" }} src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>

    </div>
  );
}

function Home(props) {
  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div className="col-md-3 m-3">
          <RenderCard item={props.dish} />
        </div>
        <div className="col-md-3 m-3">
          <RenderCard item={props.promotion} />
        </div>
        <div className="col-md-3 m-3">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
}

export default Home;
