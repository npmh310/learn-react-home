import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

function RenderMenuItem({ dish, onClick }) {
  return (
 
      <Card onClick={() => onClick(dish.id)}>
        <CardImg
          width="100%"
          style={{ padding: "10px" }}
          src={dish.img}
          alt={dish.name}
        />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
        </CardBody>
      </Card>
   );
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return(
      <div className="col-12 col-md-2 m-1" key={dish.id}>
      <RenderMenuItem dish={dish} onClick={props.onClick} />
    </div>
    )
    
  });
  return <div className="row d-flex justify-content-center ">{menu}</div>;
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
