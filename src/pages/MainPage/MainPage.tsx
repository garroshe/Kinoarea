import ErrorBoundary from "@/shared/ui/ErrorBoundaryUI/ErrorBoundaryUI";
import { MailingList } from "@/widgets/mailingList";
import { NewTrailer } from "@/widgets/newTrailer";
import { NowPlaying } from "@/widgets/nowPlaying";
import { PopularMovie } from "@/widgets/popularMovie";

const MainPage = () => {
  return (
    <>
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
    </>
  );
};

export default MainPage;
