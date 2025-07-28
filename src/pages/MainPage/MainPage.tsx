import { lazy, Suspense } from "react";

import { CenteredContentUI } from "@/shared/ui/CenteredContentUI/CenteredContentUI";
import ErrorBoundary from "@/shared/ui/ErrorBoundaryUI/ErrorBoundaryUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI/SpinnerUI";
import { NowPlaying } from "@/widgets/nowPlaying/NowPlaying";

const NewTrailer = lazy(() => import("@/widgets/newTrailer/NewTrailer"));
const PopularMovie = lazy(() => import("@/widgets/popularMovie/ui/PopularMovie"));
const MailingList = lazy(() => import("@/widgets/mailingList/MailingList"));

const MainPage = () => {
  return (
    <Suspense
      fallback={
        <CenteredContentUI>
          <SpinnerUI />
        </CenteredContentUI>
      }
    >
      <ErrorBoundary>
        <NowPlaying />
      </ErrorBoundary>

      <ErrorBoundary>
        <NewTrailer />
      </ErrorBoundary>

      <ErrorBoundary>
        <PopularMovie />
      </ErrorBoundary>

      <ErrorBoundary>
        <MailingList />
      </ErrorBoundary>
    </Suspense>
  );
};

export default MainPage;
