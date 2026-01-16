import { Link, useParams, useSearchParams } from "react-router-dom";

import { LikeOrDislike } from "@/features/LikeOrDislike";
import { routesBook } from "@/shared/routing/routesBook";
import { CenteredContentUI } from "@/shared/ui/CenteredContentUI";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { SocialUI } from "@/shared/ui/SocialUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";
import { icons, SvgIcon } from "@/shared/ui/SvgIcon";
import { TitleUI } from "@/shared/ui/TitleUI";
import { getPathToYouTubeVideo } from "@/shared/utils/get-path-to-you-tube-video";

import { useMovieFetchQuery } from "../api/use-movie-fetch-query";
import { useTrailerFetchQuery } from "../api/use-trailer-fetch-query";
import { DEFAULT_TRAILER_ID, IFRAME_ALLOW, VIDEO_TYPE } from "../const";
import {
  StyledHeader,
  StyledLeftBlock,
  StyledMarks,
  StyledNewTrailer,
  StyledTrailer,
  StyledTrailerInfo,
  StyledTrailerTitle,
} from "./styled";

type NewTrailerPropsType = {
  title: string;
};

export const NewTrailer = ({ title }: NewTrailerPropsType) => {
  const [searchParams] = useSearchParams();
  const { id } = useParams();

  const rawTrailerId = searchParams.get("trailerId");

  const trailerId = rawTrailerId || id || DEFAULT_TRAILER_ID;

  const { dataTrailer, loadingTrailerFetch } = useTrailerFetchQuery({ trailerId });
  const { dataMovieFetch, loadingMovieFetch } = useMovieFetchQuery({ trailerId });

  const loading = loadingTrailerFetch || loadingMovieFetch;
  const voteCount = dataMovieFetch?.vote_count ?? 0;
  const dislikeCount = Math.floor(voteCount / 3);

  const trailers = dataTrailer.filter(
    (video) => video.type === VIDEO_TYPE.trailer && video.site === VIDEO_TYPE.youtube,
  );

  const firstTrailer = trailers[0];

  return (
    <StyledNewTrailer id="movie-trailer">
      <ContainerUI>
        <StyledHeader>
          <TitleUI fontWeight={900} fontSize={65} title={title} />
          <Link to={routesBook.news()}>
            <span>Усі трейлери</span>
            <SvgIcon icon={icons.arrow} />
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
      </ContainerUI>
    </StyledNewTrailer>
  );
};
