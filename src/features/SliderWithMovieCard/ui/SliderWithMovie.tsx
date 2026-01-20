import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";

import type { CollectionPartType, MovieType } from "@/entities/movie/types";
import { MovieCard } from "@/features/MovieCard";
import { ERROR_MESSAGE } from "@/features/SliderWithMovieCard/const";
import { useMediaQuery } from "@/shared/hooks/use-media-query";
import { CenteredContentUI } from "@/shared/ui/CenteredContentUI";
import { ErrorStateUI } from "@/shared/ui/ErrorStateUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";
import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import { StyledNavigationBtns, StyledSlider, StyledSlidesCount } from "./styled";

type SliderWithMoviePropsType = {
  movieData?: MovieType[] | CollectionPartType[] | null;
  isMovieLoading: boolean;
};

export const SliderWithMovie = ({ movieData, isMovieLoading }: SliderWithMoviePropsType) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleChangeCurrentSlide = (swiper: SwiperCore) => {
    setCurrentSlide(swiper.activeIndex);
  };

  const isLaptop = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 480px)");

  const defaultSlides = isMobile ? 2 : isLaptop ? 3 : 4;
  const slidePreView = Math.min(defaultSlides, movieData?.length || 0);
  const seenSlides = Math.min(movieData?.length || 0, currentSlide + slidePreView);
  const leftSlides = movieData?.length;
  const spaceBetweenSlide = isLaptop ? 14 : 24;

  return (
    <StyledSlider>
      {!isMovieLoading && movieData?.length === 0 && <ErrorStateUI content={ERROR_MESSAGE} />}

      {isMovieLoading ? (
        <CenteredContentUI>
          <SpinnerUI size="large" />
        </CenteredContentUI>
      ) : (
        <Swiper
          modules={[Navigation]}
          spaceBetween={spaceBetweenSlide}
          slidesPerView={slidePreView > 0 ? slidePreView : 1}
          speed={1200}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          onSlideChange={handleChangeCurrentSlide}
          centeredSlides={(movieData?.length || 0) < defaultSlides}
        >
          {movieData?.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard
                id={item.id}
                title={item.title}
                genre={item.genre_ids}
                img={item.poster_path}
                rating={item.vote_average}
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
