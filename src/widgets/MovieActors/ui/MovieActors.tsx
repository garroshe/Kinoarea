import { useNavigate } from "react-router-dom";

import { ActorCard } from "@/entities/actors/ui/ActorCard/ActorCard";
import { routesBook } from "@/shared/routing/routesBook";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { MediaSectionHeader } from "@/shared/ui/MediaSectionHeader";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";

import { useFetchMovieActors } from "../api/use-fetch-movie-actors-query";
import { StyledGridItems, StyledMovieActors } from "./styled";

export const MovieActors = () => {
  const { isMovieActorsLoading, movieActorsDataFetch } = useFetchMovieActors();

  const { cast } = movieActorsDataFetch || {};

  const navigate = useNavigate();

  const handleNavigateToActors = () => {
    navigate(routesBook.actors());
  };

  return (
    <ContainerUI>
      {isMovieActorsLoading ? (
        <SpinnerUI />
      ) : (
        <StyledMovieActors>
          <MediaSectionHeader
            title="У головних ролях:"
            onActionClick={handleNavigateToActors}
            actionLabel="Всі актори"
          />
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
