import { NowPlaying } from "../../widgets/now-playing/ui/NowPlaying.tsx";
import { NewTrailer } from "../../widgets/now-trailer/ui/NowTrailer.tsx";

const MainPage = () => {
  return (
    <>
      <NowPlaying />
      <NewTrailer />
    </>
  );
};

export default MainPage;
