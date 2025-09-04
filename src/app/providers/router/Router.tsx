import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routesBook } from "@/shared/routing/routesBook";
import { CenteredContentUI } from "@/shared/ui/CenteredContentUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";

const MainPage = lazy(() => import("@/pages/MainPage/MainPage"));
const ErrorPage = lazy(() => import("@/pages/ErrorPage/ErrorPage"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy/PrivacyPolicy"));
const DataDeletion = lazy(() => import("@/pages/DataDeletion/DataDeletion"));

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
        <Route path={routesBook.privacyPolicy()} element={<PrivacyPolicy />} />
        <Route path={routesBook.dataDeletion()} element={<DataDeletion />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};
