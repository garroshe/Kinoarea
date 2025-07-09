import { NowPlaying } from "@/widgets/now-playing/ui/NowPlaying";
import { NewTrailer } from "@/widgets/now-trailer/ui/NowTrailer";

const MainPage = () => {
  return (
    <>
      <NowPlaying />
      <NewTrailer />
    </>
  );
};

export default MainPage;
