import { useState } from "react";
import { Progress } from "antd";
import classnames from "classnames";
import { useSearchParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { colors } from "@/shared/constants/style";
import { useMediaQuery } from "@/shared/hooks/use-media-query";
import { CenteredContentUI } from "@/shared/ui/CenteredContentUI/CenteredContentUI";
import { MovieNotFound } from "@/shared/ui/MovieNotFoundUI/MovieNotFound";
import { SpinnerUI } from "@/shared/ui/SpinnerUI/SpinnerUI";
import { SvgIcon } from "@/shared/ui/SvgIcon/SvgIcon";
import { getPathToImg } from "@/shared/utils/get-path-to-img";

import { useNewTrailersFetchQuery } from "../model/use-new-trailers-fetch-query";
import { StyledPlay, StyledSlider, StyledTitle, StyledWrapper } from "./styled";

export const SliderWithNewTrailer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const trailerId = searchParams.get("trailerId");

  const [realIndex, setRealIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState<undefined | number>(Number(trailerId) || 541671);

  const { loadingFetchTrailers, dataFetchTrailers } = useNewTrailersFetchQuery();

  const percent = dataFetchTrailers?.length ? Math.round(((realIndex + 1) / dataFetchTrailers.length) * 100) : 0;

  const handleActionsSlider = (id: number | undefined) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...currentParams, trailerId: String(id) });
    setActiveSlide(id);
  };

  const isLaptop = useMediaQuery("(max-width: 1279px)");
  const isTablet = useMediaQuery("(max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 768px)");

  const progressStyle = { marginBottom: "16px" };
  const swiperGapBetweenSlide = isLaptop ? 12 : isTablet ? 10 : 20;

  return (
    <StyledSlider data-testid="sliderWithNewTrailer">
      {!loadingFetchTrailers && dataFetchTrailers?.length === 0 && <MovieNotFound />}

      {loadingFetchTrailers ? (
        <CenteredContentUI testId="slider-with-new-trailer-spinner">
          <SpinnerUI />
        </CenteredContentUI>
      ) : (
        <>
          {!isMobile && (
            <Progress percent={percent} showInfo={false} strokeColor={colors.blue500} style={progressStyle} />
          )}
          <Swiper
            spaceBetween={swiperGapBetweenSlide}
            slidesPerView={4}
            speed={1200}
            loop={true}
            onSlideChange={(swiper) => setRealIndex(swiper.realIndex)}
          >
            {dataFetchTrailers?.map((trailer) => {
              return (
                <SwiperSlide
                  data-cy={"slide-in-new-trailer-slide"}
                  onClick={() => handleActionsSlider(trailer.id)}
                  key={trailer.id}
                >
                  <StyledWrapper>
                    <StyledPlay>
                      <SvgIcon className="icon-play" icon="play" />
                    </StyledPlay>
                    <div
                      data-testid="slider-with-trailer-block"
                      className={classnames("block", {
                        active: activeSlide === trailer.id,
                      })}
                    />
                    <img src={getPathToImg(trailer.backdrop_path, 400)} alt={trailer.original_title} />
                  </StyledWrapper>
                  <StyledTitle>{trailer.title}</StyledTitle>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      )}
    </StyledSlider>
  );
};
