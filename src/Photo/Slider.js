import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";

import './product-image-slider.scss'
const ProductImagesSlider = (props) => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        className="product-image-slider"
      >
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt="Slider Images" width={"100%"} height={"100%"}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
ProductImagesSlider.propType = {
  images: PropTypes.array.isRequired,
};
export default ProductImagesSlider;
