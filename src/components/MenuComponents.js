import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  CardBody,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderMenuItem({ dish, onClick }) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg
          width="100%"
          style={{ padding: "10px" }}
          src={dish.image}
          alt={dish.name}
        />
       
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
        </CardBody>
      </Link>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-2 m-1" key={dish.id}>
        <RenderMenuItem dish={dish} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row d-flex justify-content-center">{menu}</div>
    </div>
  );
};

// cahcs 2
// function Menu  (props){
//   const menu = props.dishes.map((dish) => {
//     return (
//       <div className="col-12 col-md-2 m-1" key={dish.id}>
//         <RenderMenuItem dish={dish} onClick={props.onClick} />
//       </div>
//     );
//   });
//   return <div className="row d-flex justify-content-center">{menu}</div>;
// };

export default Menu;
