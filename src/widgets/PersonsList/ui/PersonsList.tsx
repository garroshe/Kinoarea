import { useState } from "react";
import { Pagination } from "antd";

import { ActorCard } from "@/entities/actors/ui/ActorCard/ActorCard";
import { Breadcrumbs } from "@/features/Breadcrumbs";
import { routesBook } from "@/shared/routing/routesBook";
import { CenteredContentUI } from "@/shared/ui/CenteredContentUI";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { ErrorStateUI } from "@/shared/ui/ErrorStateUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";

import { usePopularActorsFetchQuery } from "../api/use-popular-actors-fetch-query";
import { ERROR_MESSAGE } from "../const";
import { StyledActorsGrid, StyledPersonList, StyledTitle } from "./styled";

export const PersonsList = () => {
  const [page, setPage] = useState(1);

  const { actorsData, isActorsLoading, totalActors, error } = usePopularActorsFetchQuery({ page });

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <StyledPersonList>
      <ContainerUI>
        <StyledTitle>Всі актори</StyledTitle>
        <Breadcrumbs path={[{ to: routesBook.actors(), label: "Актори", isLast: true }]} />
        {isActorsLoading ? (
          <CenteredContentUI>
            <SpinnerUI size="large" />
          </CenteredContentUI>
        ) : error ? (
          <ErrorStateUI content={ERROR_MESSAGE} />
        ) : (
          <StyledActorsGrid>
            {actorsData.map((actor) => (
              <ActorCard
                key={actor.id}
                id={actor.id}
                name={actor.name}
                imgUrl={actor.profile_path}
                character={actor.original_name}
              />
            ))}
          </StyledActorsGrid>
        )}
        <Pagination
          disabled={isActorsLoading}
          current={page}
          pageSize={20}
          defaultCurrent={1}
          onChange={handlePageChange}
          total={totalActors}
          align="center"
        />
      </ContainerUI>
    </StyledPersonList>
  );
};
