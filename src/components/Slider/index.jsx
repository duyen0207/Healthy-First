import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";

import Images from "../GlobalStyles/Images";

function Slider() {
  const image = [
    {
      id: 1,
      // src: "../../assets/images/slide1.jpg",
      src: Images.slider1,

    },
    {
      id: 2,
      src: Images.slider2,
    },
    {
      id: 3,
      src: Images.slider3,
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
                <div className="gray-background">
                  <h3>Healthy First</h3>
                  <p>
                    Hệ thống quản lý các cơ sở sản xuất thực phẩm, kinh doanh
                    dịch vụ ăn uống
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </React.Fragment>
  );
}

export default Slider;
