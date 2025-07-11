import { Progress } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";

import bg from "@/shared/assets/image.jpg";
import image1 from "@/shared/assets/image1.jpg";
import { icons, SvgIcon } from "@/shared/ui/SvgIcon/SvgIcon";
import { TitleUI } from "@/shared/ui/TitleUI/TitleUI";

import { StyledNewTrailer } from "./styled";

export const NewTrailer = () => {
  return (
    <StyledNewTrailer>
      <div className="container">
        <div className="header">
          <TitleUI fontWeight={900} fontSize={65} title="Нові трейлери" />
          <div className="header-wrapper">
            <div>Усі трейлери</div>
            <SvgIcon icon={icons.arrow} />
          </div>
        </div>
        <div className="trailer">
          <img src={bg} alt="img" />
          <SvgIcon icon={icons.play} className="position" />
        </div>
        <div className="trailer-info">
          <div className="left-block">
            <h3 className="trailer-name">Форсаж 9</h3>
            <SvgIcon icon={icons.social} />
          </div>
          <div className="marks">
            <div className="like">
              <div className="block">
                <SvgIcon icon={icons.like} />
              </div>
              <div className="rating">3 245</div>
            </div>
            <div className="dislike">
              <div className="block">
                <SvgIcon className="dislike-icon" icon={icons.like} />
              </div>
              <div className="rating">245</div>
            </div>
          </div>
        </div>
        <div className="slider">
          <Progress percent={25} showInfo={false} style={{ marginBottom: "24px" }} />
          <Swiper spaceBetween={50} slidesPerView={3} onSlideChange={() => {}} onSwiper={() => {}}>
            <SwiperSlide>
              <img src={image1} alt="img" />
              <div className="slider-title">Мулан </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image1} alt="img" />
              <div className="slider-title">Мулан </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image1} alt="img" />
              <div className="slider-title">Мулан </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image1} alt="img" />
              <div className="slider-title">Мулан </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </StyledNewTrailer>
  );
};
