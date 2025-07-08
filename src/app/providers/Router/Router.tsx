import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routesBook } from "../../../shared/config/routesBook";
import { CenteredContentUI } from "../../../shared/ui/CenteredContentUI/CenteredContentUI";
import { SpinnerUI } from "../../../shared/ui/SpinnerUI/SpinnerUI";

const MainPage = lazy(() => import("../../../pages/MainPage/MainPage"));
const ErrorPage = lazy(() => import("../../../pages/ErrorPage/ErrorPage"));

export const Router = () => {
  return (
    <Suspense
      fallback={
        <CenteredContentUI>
          <SpinnerUI size="large" />
        </CenteredContentUI>
      }
    >
      <Routes>
        <Route path={routesBook.main()} element={<MainPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};
