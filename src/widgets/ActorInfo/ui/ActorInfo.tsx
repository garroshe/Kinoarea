import { useState } from "react";

import { Breadcrumbs } from "@/features/breadcrumbs";
import { colors } from "@/shared/constants/style";
import { useMediaQuery } from "@/shared/hooks/use-media-query";
import { routesBook } from "@/shared/routing/routesBook";
import { ActorNotFoundUI } from "@/shared/ui/ActorNotFoundUI/ActorNotFoundUI";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { getPathToImg } from "@/shared/utils/get-path-to-img";
import { safeValue } from "@/shared/utils/safe-value";

import { useFetchActorInfoQuery } from "../api/use-fetch-actor-info-query";
import { ACTION_TYPE } from "../model/constants";
import {
  StyledActorInfo,
  StyledAlsoKnowsAs,
  StyledBio,
  StyledImage,
  StyledListKeys,
  StyledListValue,
  StyledName,
  StyledTab,
  StyledTable,
  StyledTabs,
} from "./styled";

export const ActorInfo = () => {
  const [selectTab, setSelectTab] = useState(ACTION_TYPE.info);
  const { actorDataFetch } = useFetchActorInfoQuery();

  const { name, also_known_as, profile_path, biography, birthday, place_of_birth, popularity, deathday } =
    actorDataFetch || {};

  const isMobile = useMediaQuery("(max-width: 480px)");

  return (
    <ContainerUI>
      <StyledActorInfo>
        {!isMobile && (
          <StyledImage>
            {profile_path ? <img src={getPathToImg(profile_path)} alt={name} /> : <ActorNotFoundUI size="large" />}
          </StyledImage>
        )}
        <div>
          <Breadcrumbs
            path={[
              { to: routesBook.actors(), label: "Актори", isLast: false },
              { to: "", label: name || "", isLast: true },
            ]}
          />
          <StyledName>{name}</StyledName>
          <StyledAlsoKnowsAs>{also_known_as ? also_known_as[0] : ""}</StyledAlsoKnowsAs>
          {isMobile && (
            <StyledImage>
              {profile_path ? <img src={getPathToImg(profile_path)} alt={name} /> : <ActorNotFoundUI size="small" />}
            </StyledImage>
          )}
          <StyledTabs>
            <StyledTab
              style={{
                color: selectTab !== ACTION_TYPE.info ? `${colors.grey400}` : `${colors.white50}`,
                textDecoration: selectTab === ACTION_TYPE.info ? "underline" : "none",
              }}
              onClick={() => setSelectTab(ACTION_TYPE.info)}
            >
              Інформація
            </StyledTab>
            <StyledTab
              style={{
                color: selectTab !== ACTION_TYPE.bio ? `${colors.grey400}` : `${colors.white50}`,
                textDecoration: selectTab === ACTION_TYPE.bio ? "underline" : "none",
              }}
              onClick={() => setSelectTab(ACTION_TYPE.bio)}
            >
              Біографія
            </StyledTab>
          </StyledTabs>
          {selectTab === ACTION_TYPE.info ? (
            <StyledTable>
              <StyledListKeys>
                <li>Дата народження:</li>
                <li>Місце народження:</li>
                <li>Популярність:</li>
                <li>Помер:</li>
              </StyledListKeys>
              <StyledListValue>
                <li>{safeValue(birthday)}</li>
                <li>{safeValue(place_of_birth)}</li>
                <li>{safeValue(Number(popularity).toFixed(2))}</li>
                <li>{deathday ? `$${deathday.toLocaleString()}` : "Ще живий)"}</li>
              </StyledListValue>
            </StyledTable>
          ) : (
            <StyledBio>{biography ? biography : "На даний момент не має біографії цього актора :("}</StyledBio>
          )}
        </div>
      </StyledActorInfo>
    </ContainerUI>
  );
};
