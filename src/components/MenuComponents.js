import React from "react";
import { Media } from "reactstrap";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [
        {
          id: 0,
          name: "Avatar meo",
          img: "../assets/images/5d2e757e470bbbc1894262ab789a4181.jpg",
          description: 'đây là con mèo xinh nhất vụ trụ hehehehe'
        },
        {
          id: 1,
          name: "Avatar member",
          img: "../assets/images/avatar2.png",
          description: 'đây là avatar con ngươi'
        },
        {
          id: 2,
          name: "Avatar cho",
          img: "../assets/images/cho-Shiba-hoat-hinh-1.jpg",
          description: 'đây là con chó xinh nhất vụ trụ hehehehe'
        },
      ],
    };
  }

  render() {
    const menu = this.state.dishes.map((ownDish) => {
      return (
        <div key={ownDish.id} className="col-12 mt-5">
          <Media tag="li">
            <Media left middle>
              <Media
                object
                style={{ width: "100px", height: "100px" }}
                src={ownDish.img}
                alt={ownDish.name}
              />
            </Media>
            <Media body className="ml-5">
              <Media heading>{ownDish.name}</Media>
              <p>{ownDish.description}</p>
            </Media>
          </Media>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          {/* <Media list>{menu}</Media> */}
          {menu}
        </div>
      </div>
    );
  }
}
export default Menu;
