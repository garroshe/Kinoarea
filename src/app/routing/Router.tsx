import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { CenteredContentUI } from "@/shared/ui/CenteredContentUI/CenteredContentUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI/SpinnerUI";

import { routesBook } from "./routesBook";

const MainPage = lazy(() => import("@/pages/MainPage/MainPage"));
const FilmsPage = lazy(() => import("@/pages/FilmsPage/FilmsPage"));
const ErrorPage = lazy(() => import("@/pages/ErrorPage/ErrorPage"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy/PrivacyPolicy"));

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
        <Route path={routesBook.films()} element={<FilmsPage />} />
        <Route path={routesBook.privacyPolicy()} element={<PrivacyPolicy />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};
