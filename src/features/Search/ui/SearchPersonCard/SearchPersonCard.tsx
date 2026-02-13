import { useNavigate } from "react-router-dom";

import { SearchImagePlaceholder } from "@/features/Search/ui/SearchImagePlaceholder";
import { getPathToImg } from "@/shared/utils/get-path-to-img";

import { StyledPoster, StyledSearchPersonCard, StyledSubTitle, StyledTitle } from "./styled";

type SearchPersonCardPropsType = {
  id: number;
  img: string;
  name: string;
  original_name: string;
};

export const SearchPersonCard = ({ id, img, original_name, name }: SearchPersonCardPropsType) => {
  const navigate = useNavigate();

  const handleOpenCard = () => {
    navigate(`/actor/${id}`);
  };

  return (
    <StyledSearchPersonCard onClick={handleOpenCard}>
      <StyledPoster>
        {img ? (
          <img src={getPathToImg(img)} alt={name} onClick={handleOpenCard} loading="lazy" />
        ) : (
          <SearchImagePlaceholder text="Немає фото" />
        )}
      </StyledPoster>
      <div>
        <StyledTitle onClick={handleOpenCard}>{name}</StyledTitle>
        <StyledSubTitle>{original_name}</StyledSubTitle>
      </div>
    </StyledSearchPersonCard>
  );
};
