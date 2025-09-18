import { useNavigate } from "react-router-dom";

import { ActorNotFoundUI } from "@/shared/ui/ActorNotFoundUI/ActorNotFoundUI";
import { getPathToImg } from "@/shared/utils/get-path-to-img";

import { StyledActorCard, StyledCharacterName, StyledImageActor } from "./styled";

type ActorCardPropsType = {
  name: string;
  character: string;
  imgUrl: string;
  id: number;
};

export const ActorCard = ({ name, character, imgUrl, id }: ActorCardPropsType) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/actor/${id}`);
  };

  return (
    <StyledActorCard data-testid="actor-card" onClick={handleClick}>
      <StyledImageActor>
        {imgUrl ? <img src={getPathToImg(imgUrl, 300)} alt={name} /> : <ActorNotFoundUI size="small" />}
      </StyledImageActor>
      <h3>{name}</h3>
      <StyledCharacterName>{character}</StyledCharacterName>
    </StyledActorCard>
  );
};
