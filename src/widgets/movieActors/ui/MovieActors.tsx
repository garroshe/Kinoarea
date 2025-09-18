import { ActorCard } from "@/entities/actors/ui/ActorCard/ActorCard";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";
import { icons, SvgIcon } from "@/shared/ui/SvgIcon";
import { TitleUI } from "@/shared/ui/TitleUI";

import { useFetchMovieActors } from "../api/hooks/use-fetch-movie-actors-query";
import { StyledAllActors, StyledGridItems, StyledHeader, StyledMovieActors } from "./styled";

export const MovieActors = () => {
  const { isMovieActorsLoading, movieActorsDataFetch } = useFetchMovieActors();

  const { cast } = movieActorsDataFetch || {};

  return (
    <ContainerUI>
      {isMovieActorsLoading ? (
        <SpinnerUI />
      ) : (
        <StyledMovieActors>
          <StyledHeader>
            <TitleUI fontSize={65} title="У головних ролях:" />
            <StyledAllActors>
              <span>Всі актори</span>
              <SvgIcon icon={icons.arrow} />
            </StyledAllActors>
          </StyledHeader>
          <StyledGridItems>
            {cast?.slice(0, 15)?.map((actor) => {
              return (
                <ActorCard
                  name={actor.name}
                  character={actor.character}
                  imgUrl={actor.profile_path}
                  key={actor.id}
                  id={actor.id}
                />
              );
            })}
          </StyledGridItems>
        </StyledMovieActors>
      )}
    </ContainerUI>
  );
};
