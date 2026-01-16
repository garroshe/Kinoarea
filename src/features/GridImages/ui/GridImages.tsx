import { PhotoProvider, PhotoView } from "react-photo-view";

import type { MovieImageType } from "@/entities/movie/types";
import { useMediaQuery } from "@/shared/hooks/use-media-query";
import { getPathToImg } from "@/shared/utils/get-path-to-img";

import "react-photo-view/dist/react-photo-view.css";

import { StyledCountImage, StyledImageWrapper, StyledMoreImage, StyledWrapperFrames } from "./styled";

type GridImagesPropsType = {
  images?: MovieImageType[];
};

export const GridImages = ({ images }: GridImagesPropsType) => {
  const isTablet = useMediaQuery("(max-width: 1024px)");

  const hiddenImageCount = images ? images.length - 4 : 0;
  const isVisibleCountImage = isTablet ? 1 : 3;

  return (
    <PhotoProvider>
      <StyledWrapperFrames>
        {images?.map((image, i) => (
          <PhotoView key={i} src={getPathToImg(image.file_path)}>
            <StyledImageWrapper style={{ display: i > isVisibleCountImage ? "none" : "block" }}>
              <img src={getPathToImg(image.file_path)} alt={image.file_path} />

              {i === 3 && hiddenImageCount > 0 && (
                <div>
                  <StyledMoreImage />
                  <StyledCountImage>+{hiddenImageCount}</StyledCountImage>
                </div>
              )}
            </StyledImageWrapper>
          </PhotoView>
        ))}
      </StyledWrapperFrames>
    </PhotoProvider>
  );
};
