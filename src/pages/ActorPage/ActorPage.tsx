import ErrorBoundary from "@/shared/ui/ErrorBoundaryUI/ErrorBoundaryUI";
import { ActorBestMovies } from "@/widgets/ActorBestMovies";
import { ActorGallery } from "@/widgets/ActorGallery";
import { ActorInfo } from "@/widgets/ActorInfo";
import { ActorMovies } from "@/widgets/ActorMovies";
import { Header } from "@/widgets/Header";
import { MailingList } from "@/widgets/MailingList";

const ActorPage = () => {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <ActorInfo />
      </ErrorBoundary>
      <ErrorBoundary>
        <ActorBestMovies />
      </ErrorBoundary>
      <ErrorBoundary>
        <ActorGallery />
      </ErrorBoundary>
      <ErrorBoundary>
        <ActorMovies />
      </ErrorBoundary>
      <ErrorBoundary>
        <MailingList />
      </ErrorBoundary>
    </>
  );
};

export default ActorPage;
