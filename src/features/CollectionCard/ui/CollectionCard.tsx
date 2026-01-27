import { useNavigate } from "react-router-dom";

import { StyledButton, StyledCollectionCard, StyledImage, StyledSubTitle, StyledTitle, StyledWrapper } from "./styled";

type CollectionCardPropsType = {
  title: string;
  id: string;
  imageTitle: string;
  limit: string;
};

export const CollectionCard = ({ title, id, imageTitle, limit }: CollectionCardPropsType) => {
  const navigate = useNavigate();

  const twoPartTitle = imageTitle.split(" ");
  const firstWord = twoPartTitle[0];
  const restWords = twoPartTitle.slice(1).join(" ");

  const handleOpenCollection = () => {
    navigate(`/collections/${id}`);
  };

  return (
    <StyledCollectionCard>
      <StyledImage onClick={handleOpenCollection}>
        {firstWord}
        <span>{restWords}</span>
      </StyledImage>
      <StyledWrapper>
        <div>
          <StyledTitle onClick={handleOpenCollection}>{title}</StyledTitle>
          <StyledSubTitle>{limit}</StyledSubTitle>
        </div>
        <StyledButton onClick={handleOpenCollection}>Подивитися</StyledButton>
      </StyledWrapper>
    </StyledCollectionCard>
  );
};
