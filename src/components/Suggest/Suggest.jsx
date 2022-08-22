import React from "react";
import {
  SuggestWraper,
  SuggestBox,
  SuggestHead,
  SuggestBody,
  NextButton,
  PrevButton,
} from "./styles";
import Slider from "react-slick";
import SuggestList from "./SuggestList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Suggest = ({ children, list }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: (
      <div>
        <NextButton />
      </div>
    ),
    prevArrow: (
      <div>
        <PrevButton />
      </div>
    ),
  };
  return (
    <SuggestWraper>
      <SuggestBox>
        <SuggestHead>
          <div>{children && <span>{children}</span>}</div>
        </SuggestHead>
        <SuggestBody>
          <Slider {...settings}>
            {list?.map((item) => (
              <SuggestList key={item.productId} item={item} />
            ))}
          </Slider>
        </SuggestBody>
      </SuggestBox>
    </SuggestWraper>
  );
};

export default Suggest;
