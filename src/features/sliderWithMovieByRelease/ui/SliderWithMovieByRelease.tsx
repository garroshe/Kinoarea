import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";

import { MovieCard } from "@/features/movieCard";
import { useMovieByReleaseFetchQuery } from "@/features/sliderWithMovieByRelease/lib/use-movie-by-release-fetch-query";
import { useMediaQuery } from "@/shared/hooks/use-media-query";
import { CenteredContentUI } from "@/shared/ui/CenteredContentUI";
import { MovieNotFound } from "@/shared/ui/MovieNotFoundUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";
import { icons, SvgIcon } from "@/shared/ui/SvgIcon";
import { getPathToImg } from "@/shared/utils/get-path-to-img";

import { StyledNavigationBtns, StyledSlider, StyledSlidesCount } from "./styled";

export const SliderWithMovieByRelease = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { movieDataFetch, isMovieLoading } = useMovieByReleaseFetchQuery();

  const handleChangeCurrentSlide = (swiper: SwiperCore) => {
    setCurrentSlide(swiper.activeIndex);
  };

  const isLaptop = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 480px)");

  const slidePreView = isMobile ? 2 : isLaptop ? 3 : 4;
  const seenSlides = currentSlide + slidePreView;
  const leftSlides = movieDataFetch.length;
  const spaceBetweenSlide = isLaptop ? 14 : 24;

  return (
    <StyledSlider>
      {!isMovieLoading && movieDataFetch.length === 0 && <MovieNotFound />}

      {isMovieLoading ? (
        <CenteredContentUI>
          <SpinnerUI size="large" />
        </CenteredContentUI>
      ) : (
        <Swiper
          modules={[Navigation]}
          spaceBetween={spaceBetweenSlide}
          slidesPerView={slidePreView}
          speed={1200}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          onSlideChange={handleChangeCurrentSlide}
        >
          {movieDataFetch.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard
                id={item.id}
                title={item.title}
                genre={item.genre_ids}
                img={getPathToImg(item.poster_path, 500)}
                rating={Number(item.vote_average?.toFixed(1))}
                key={item.id}
                originalTitle={item.original_title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <StyledNavigationBtns>
        <SvgIcon icon={icons.prevArrow} className="swiper-button-prev" />
        <StyledSlidesCount>
          {seenSlides}/{leftSlides}
        </StyledSlidesCount>
        <SvgIcon icon={icons.nextArrow} className="swiper-button-next" />
      </StyledNavigationBtns>
    </StyledSlider>
  );
};
