import { SliderWithNewTrailer } from "@/features/sliderWithNewTrailer";
import ErrorBoundary from "@/shared/ui/ErrorBoundaryUI/ErrorBoundaryUI";
import { Header } from "@/widgets/header";
import { MailingList } from "@/widgets/mailingList";
import { NewTrailer } from "@/widgets/newTrailer";
import { NowPlaying } from "@/widgets/nowPlaying";
import { PopularMovie } from "@/widgets/popularMovie";

const MainPage = () => {
  return (
    <>
      <Header />

      <ErrorBoundary>
        <NowPlaying />
      </ErrorBoundary>

      <ErrorBoundary>
        <NewTrailer title="Нові трейлери" />
      </ErrorBoundary>

      <ErrorBoundary>
        <SliderWithNewTrailer />
      </ErrorBoundary>

      <ErrorBoundary>
        <PopularMovie />
      </ErrorBoundary>

      <ErrorBoundary>
        <MailingList />
      </ErrorBoundary>
    </>
  );
};

export default MainPage;
