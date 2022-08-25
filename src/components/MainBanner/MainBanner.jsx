import React, { useState, useCallback } from "react";
import useInterval from "../../hooks/useInterval";
import {
  Banner,
  SlideButton,
  SlideItems,
  SlideWrapper,
  SwiperWrapper,
  Swiper,
  BannerCount,
} from "./styles";

const slides = [
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/c22f86b2-3bb3-4974-ac4e-0668e69501c9.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/44517000-959a-4702-be73-34e35c35f8a8.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/c69cdb49-84bb-43a7-91aa-9d703cba994b.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/26f022f6-8675-4768-b645-8751c22fb166.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/e555d31c-df05-44a6-ba00-eb64156e1c76.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/300ef081-0ccc-4cf9-8eab-ec5117e7ec2c.jpg",
  },
  {
    src: "https://img-cf.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/39c28de9-2a7f-43bc-9e41-648befae3c95",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/026ebc78-835d-4bed-ad49-9a55b2ce0b36.jpg",
  },
];

const MainBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stopInterval, setStopInterval] = useState(false);

  const handleSwipe = (direction) => {
    if (currentIndex + direction === slides.length) {
      setCurrentIndex(0);
    } else if (currentIndex + direction < 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex((currentIndex) => currentIndex + direction);
    }
  };

  const onMouseEnter = useCallback(() => {
    setStopInterval(true);
  }, []);
  const onMouseLeave = useCallback(() => {
    setStopInterval(false);
  }, []);

  const onMouseDown = useCallback(() => {
    setStopInterval(true);
  }, []);
  const onMouseUp = useCallback(() => {
    setStopInterval(false);
  }, []);

  useInterval(
    () => {
      if (currentIndex === slides.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    },
    stopInterval ? null : 2000
  );

  return (
    <Banner>
      <SwiperWrapper>
        <Swiper>
          <SlideButton
            direction="prev"
            onClick={() => handleSwipe(-1)}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
          ></SlideButton>
          <SlideButton
            direction="next"
            onClick={() => handleSwipe(1)}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
          ></SlideButton>
          <SlideWrapper
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
              transform: `translateX(${currentIndex * -100}%) `,
            }}
          >
            {slides.map((list, idx) => {
              return (
                <SlideItems key={idx}>
                  <img src={list.src} alt="배너이미지" />
                </SlideItems>
              );
            })}
          </SlideWrapper>
        </Swiper>
        <BannerCount>
          {currentIndex + 1} / {slides.length}
        </BannerCount>
      </SwiperWrapper>
    </Banner>
  );
};

export default MainBanner;
