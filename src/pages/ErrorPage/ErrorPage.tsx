import { useNavigate } from "react-router-dom";

import { routesBook } from "@/shared/routing/routesBook";
import { Header } from "@/widgets/Header";

import { StyledBackBtn, StyledBtnWrapper, StyledErrorPage, StyledSearchBtn } from "./styled";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <StyledErrorPage>
        <h2>404</h2>
        <h3>Кіна не буде: (</h3>
        <p>Можливо, даної адреси сторінки не існує, або сторінку було переміщено.</p>
        <StyledBtnWrapper>
          <StyledBackBtn data-cy="error-page-redirect-btn" onClick={() => navigate(routesBook.main())}>
            Повернутися на головну
          </StyledBackBtn>
          <StyledSearchBtn>Пошук по сайту</StyledSearchBtn>
        </StyledBtnWrapper>
      </StyledErrorPage>
    </>
  );
};

export default ErrorPage;
