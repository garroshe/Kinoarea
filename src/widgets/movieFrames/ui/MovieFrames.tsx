import { PhotoProvider, PhotoView } from "react-photo-view";

import { ContainerUI } from "@/shared/ui/ContainerUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";
import { icons, SvgIcon } from "@/shared/ui/SvgIcon";
import { TitleUI } from "@/shared/ui/TitleUI";
import { getPathToImg } from "@/shared/utils/get-path-to-img";

import "react-photo-view/dist/react-photo-view.css";

import { useMediaQuery } from "@/shared/hooks/use-media-query";

import { useFramesFetchQueryById } from "../model/hooks/use-frames-fetch-query-by-id";
import { useMovieFetchByIdQuery } from "../model/hooks/use-movie-fetch-by-id-query";
import {
  StyledCountImage,
  StyledHeader,
  StyledImageWrapper,
  StyledMoreImage,
  StyledMovieFrames,
  StyledMovieName,
  StyledWrapperFrames,
} from "./styled";

export const MovieFrames = () => {
  const { movieImagesFetch, isMovieImagesLoading } = useFramesFetchQueryById();
  const { movieDataFetch, isMovieLoading } = useMovieFetchByIdQuery();

  const isTablet = useMediaQuery("(max-width: 1024px)");

  const { backdrops } = movieImagesFetch || {};

  const hiddenCount = backdrops ? backdrops.length - 4 : 0;
  const visibleCountImage = isTablet ? 1 : 3;

  if (isMovieImagesLoading || isMovieLoading) {
    return <SpinnerUI />;
  }

  return (
    <StyledMovieFrames id="movie-frames">
      <ContainerUI>
        <StyledHeader>
          <TitleUI title="Кадри з фільму" fontSize={isTablet ? 40 : 65} />
          <div>
            Усі постери
            <SvgIcon icon={icons.arrow} />
          </div>
        </StyledHeader>
        <StyledMovieName>{movieDataFetch?.title}</StyledMovieName>
        <PhotoProvider>
          <StyledWrapperFrames>
            {backdrops?.map((image, i) => (
              <PhotoView key={i} src={getPathToImg(image.file_path)}>
                <StyledImageWrapper style={{ display: i > visibleCountImage ? "none" : "block" }}>
                  <img src={getPathToImg(image.file_path)} alt={image.file_path} />

                  {i === 3 && hiddenCount > 0 && (
                    <div>
                      <StyledMoreImage />
                      <StyledCountImage>+{hiddenCount}</StyledCountImage>
                    </div>
                  )}
                </StyledImageWrapper>
              </PhotoView>
            ))}
          </StyledWrapperFrames>
        </PhotoProvider>
      </ContainerUI>
    </StyledMovieFrames>
  );
};
