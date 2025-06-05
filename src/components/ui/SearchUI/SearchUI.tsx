import search from "../../../assets/header/search.svg"
import {StyledSearch, StyledSearchImg} from "./styled.tsx";

export const SearchUI = () => {
    return (
        <StyledSearch>
            <StyledSearchImg src={search} alt="search" />
        </StyledSearch>
    )
}