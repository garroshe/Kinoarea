import { NavLink } from "react-router-dom";

import { StyledNavBar } from "./styled.tsx";

export const NavBar = () => {
  return (
    <StyledNavBar>
      <NavLink to="/poster">Афіша</NavLink>
      <NavLink to="/media">Медіа</NavLink>
      <NavLink to="/films">Фільми</NavLink>
      <NavLink to="/actors"> Актори</NavLink>
      <NavLink to="/news">Новини</NavLink>
      <NavLink to="/colections">Добірки</NavLink>
      <NavLink to="/categories">Категорії</NavLink>
    </StyledNavBar>
  );
};
