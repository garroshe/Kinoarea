import { NowPlaying } from "../../widgets/now-playing/ui/NowPlaying.tsx";
import { NewTrailer } from "../../widgets/now-trailer/ui/NowTrailer.tsx";

export const MainPage = () => {
  return (
    <>
      <NowPlaying />
      <NewTrailer />
    </>
  );
};
