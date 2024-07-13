import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css"; // Ensure Swiper's CSS is imported
import { Autoplay } from "swiper";
import "./Residancies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const Residancies = () => {
  return (
    <div className="section">
      <div className="h-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="r-head flexColstart">
            <span className="orangeText">Best Choices</span><br />
            <span className="primaryText">Popular Residencies</span>
          </div>
          <Swiper
            {...sliderSettings}
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
          >
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="r-card">
                  <img src={card.image} alt="" /><br />
                  <span className="secondaryText r-price">
                    <span style={{ color: "orange" }}>$</span>
                    <span>{card.price}</span><br />
                  </span>
                  <span className="primaryText">{card.name}</span><br />
                  <span className="secondaryText">{card.detail}</span>
                </div>
              </SwiperSlide>
            ))}
            <SliderButtons />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-buttons">
      <button className="r-button" onClick={() => swiper.slidePrev()}>&lt;</button>
      <button className="r-button" onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

export default Residancies;
