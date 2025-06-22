import { StyledGenreTabs } from './styled.tsx';

export const GenreTabs = () => {
  return (
    <StyledGenreTabs>
      <li className="tab-active">Усі</li>
      <li>Бойовики</li>
      <li>Пригоди</li>
      <li> Комедії</li>
      <li>Фантастика</li>
      <li>Трилери</li>
      <li>Драма</li>
    </StyledGenreTabs>
  );
};
