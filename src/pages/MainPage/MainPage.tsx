import { lazy, Suspense } from "react";

import { CenteredContentUI } from "@/shared/ui/CenteredContentUI/CenteredContentUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI/SpinnerUI";
import { NowPlaying } from "@/widgets/nowPlaying/ui/NowPlaying";

const NewTrailer = lazy(() => import("@/widgets/newTrailer/ui/NewTrailer"));
const PopularMovie = lazy(() => import("@/widgets/popularMovie/ui/PopularMovie"));

const MainPage = () => {
  return (
    <Suspense
      fallback={
        <CenteredContentUI>
          <SpinnerUI />
        </CenteredContentUI>
      }
    >
      <NowPlaying />
      <NewTrailer />
      <PopularMovie />
    </Suspense>
  );
};

export default MainPage;
