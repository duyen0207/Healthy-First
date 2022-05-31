import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Slider() {
  const image = [
    {
      id: 1,
      src: "../../assets/images/slide1.jpg",
    },
    {
      id: 2,
      src: "../../assets/images/slide2.jpg",
    },
    {
      id: 3,
      src: "../../assets/images/slide3.jpg",
    },
  ];
  return (
    <React.Fragment>
      <Carousel>
        {image.map((item) => {
          return (
            <Carousel.Item>
              <img className="d-block w-100" src={item.src} />
              <Carousel.Caption>
                <h3>Healthy First</h3>
                <p>
                  Hệ thống quản lý các cơ sở sản xuất thực phẩm, kinh doanh dịch vụ ăn uống
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </React.Fragment>
  );
}

export default Slider;
