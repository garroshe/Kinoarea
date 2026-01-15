import { useFetchActorImagesQuery } from "../api/use-fetch-actor-images-query";
import { useFetchActorInfoQuery } from "../api/use-fetch-actor-info-query";

export const formatedActorImagesData = () => {
  const { isImagesLoading, imagesError, imagesDataFetch } = useFetchActorImagesQuery();
  const { isActorInfoLoading, actorInfoData, actorInfoError } = useFetchActorInfoQuery();

  return {
    isImagesLoading,
    isActorInfoLoading,
    actorName: String(actorInfoData?.name),
    imagesError,
    images: imagesDataFetch?.profiles,
    actorInfoError,
  };
};
