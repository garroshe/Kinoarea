import { useEffect, useState, type ChangeEvent } from "react";

import { formatData } from "@/features/Search/model/formated-data";
import { SearchPersonCard } from "@/features/Search/ui/SearchPersonCard";
import { CenteredContentUI } from "@/shared/ui/CenteredContentUI";
import { ErrorStateUI } from "@/shared/ui/ErrorStateUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";
import { icons, SvgIcon } from "@/shared/ui/SvgIcon";
import { useDebounceValue } from "@/shared/utils/use-debounce-value";

import { useFetchSearchQuery } from "../../api/use-fetch-search-query";
import { SearchMovieCard } from "../SearchMovieCard";
import {
  StyledList,
  StyledListTitle,
  StyledSearch,
  StyledSearchButton,
  StyledSearchInput,
  StyledSearchModal,
  StyledSearchModalContent,
  StyledTopBlock,
  StyledWrapper,
} from "./styled";

export const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const debounceValue = useDebounceValue<string>(searchQuery);

  const { searchData, isLoading, error } = useFetchSearchQuery({ query: debounceValue });

  const { personData, movieData } = formatData(searchData);

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [isOpen]);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const movieCondition = movieData?.length !== 0;
  const personCondition = personData?.length !== 0;

  return (
    <>
      <StyledSearch onClick={handleToggle}>
        <SvgIcon icon={icons.search} />
      </StyledSearch>
      {isOpen && (
        <StyledSearchModal>
          <StyledSearchModalContent>
            <SvgIcon icon={icons.logotype} className="logo-icon" />
            <StyledTopBlock>
              <StyledWrapper>
                <StyledSearchInput placeholder="Пошук" onChange={handleChangeValue} value={searchQuery} />
                <SvgIcon icon={icons.filters} className="filters-icon" />
                <StyledSearchButton>
                  <SvgIcon icon={icons.search} />
                </StyledSearchButton>
              </StyledWrapper>
              <SvgIcon icon={icons.dagger} onClick={handleToggle} />
            </StyledTopBlock>
            {movieCondition || personCondition ? (
              <StyledList>
                {movieCondition && <StyledListTitle>Фільми</StyledListTitle>}
                {movieData?.map((item) => (
                  <SearchMovieCard
                    id={item.id}
                    key={item.id}
                    img={item.poster_path}
                    title={item.title}
                    rating={item.vote_average}
                    originalTitle={item.original_title}
                    genres={item.genre_ids}
                  />
                ))}
                {personCondition && <StyledListTitle>Актори</StyledListTitle>}
                {personData?.map((item) => (
                  <SearchPersonCard
                    id={item.id}
                    key={item.id}
                    img={item.profile_path}
                    name={item.name}
                    original_name={item.original_name}
                  />
                ))}
              </StyledList>
            ) : error ? (
              <ErrorStateUI />
            ) : (
              isLoading && (
                <CenteredContentUI>
                  <SpinnerUI size="large" />
                </CenteredContentUI>
              )
            )}
          </StyledSearchModalContent>
        </StyledSearchModal>
      )}
    </>
  );
};
