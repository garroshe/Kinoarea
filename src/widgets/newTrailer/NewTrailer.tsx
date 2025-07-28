import { Link, useSearchParams } from "react-router-dom";

import { routesBook } from "@/app/routing/routesBook";
import { LikeOrDislike } from "@/features/likeOrDislike/LikeOrDislike";
import { SliderWithNewTrailer } from "@/features/sliderWithNewTrailer/SliderWithNewTrailer";
import { CenteredContentUI } from "@/shared/ui/CenteredContentUI/CenteredContentUI";
import { ContainerUI } from "@/shared/ui/ContainerUI/ContainerUI";
import { SocialUI } from "@/shared/ui/SocialUI/Social";
import { SpinnerUI } from "@/shared/ui/SpinnerUI/SpinnerUI";
import { SvgIcon } from "@/shared/ui/SvgIcon/SvgIcon";
import { TitleUI } from "@/shared/ui/TitleUI/TitleUI";
import { getPathToYouTubeVideo } from "@/shared/utils/get-path-to-you-tube-video";

import { DEFAULT_TRAILER_ID, IFRAME_ALLOW, VIDEO_TYPE } from "./model/constants";
import { useMovieFetchQuery } from "./model/hooks/use-movie-fetch-query";
import { useTrailerFetchQuery } from "./model/hooks/use-trailer-fetch-query";
import {
  StyledHeader,
  StyledLeftBlock,
  StyledMarks,
  StyledNewTrailer,
  StyledTrailer,
  StyledTrailerInfo,
  StyledTrailerTitle,
} from "./styled";

const NewTrailer = () => {
  const [searchParams] = useSearchParams();
  const rawTrailerId = searchParams.get("trailerId");
  const trailerId = rawTrailerId ?? DEFAULT_TRAILER_ID;

  const { dataTrailer, loadingTrailerFetch } = useTrailerFetchQuery({ trailerId });
  const { dataMovieFetch, loadingMovieFetch } = useMovieFetchQuery({ trailerId });

  const loading = loadingTrailerFetch || loadingMovieFetch;
  const voteCount = dataMovieFetch?.vote_count ?? 0;
  const dislikeCount = Math.floor(voteCount / 2);

  const trailers = dataTrailer.filter(
    (video) => video.type === VIDEO_TYPE.trailer && video.site === VIDEO_TYPE.youtube,
  );

  const firstTrailer = trailers[0];

  return (
    <StyledNewTrailer>
      <ContainerUI>
        <StyledHeader>
          <TitleUI fontWeight={900} fontSize={65} title="Нові трейлери" />
          <Link to={routesBook.news()}>
            <span>Усі трейлери</span>
            <SvgIcon icon="arrow" />
          </Link>
        </StyledHeader>

        <StyledTrailer>
          {loading ? (
            <CenteredContentUI testId="new-trailer-loader">
              <SpinnerUI size="large" />
            </CenteredContentUI>
          ) : (
            <iframe
              width="100%"
              height="100%"
              src={getPathToYouTubeVideo(firstTrailer?.key)}
              title={firstTrailer?.name}
              allow={IFRAME_ALLOW}
              allowFullScreen
            />
          )}
        </StyledTrailer>

        <StyledTrailerInfo>
          <StyledLeftBlock>
            <StyledTrailerTitle>{dataMovieFetch?.title}</StyledTrailerTitle>
            <SocialUI />
          </StyledLeftBlock>

          <StyledMarks>
            <LikeOrDislike rating={voteCount} />
            <LikeOrDislike rating={dislikeCount} type="dislike" />
          </StyledMarks>
        </StyledTrailerInfo>

        <SliderWithNewTrailer />
      </ContainerUI>
    </StyledNewTrailer>
  );
};

export default NewTrailer;
