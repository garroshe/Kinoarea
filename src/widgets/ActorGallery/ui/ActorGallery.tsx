import { GridImages } from "@/features/gridImages";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { ErrorStateUI } from "@/shared/ui/ErrorStateUI";
import { MediaSectionHeader } from "@/shared/ui/MediaSectionHeader";
import { SkeletonUI } from "@/shared/ui/SkeletonUI";
import { formatedActorImagesData } from "@/widgets/ActorGallery/model";

import { ERROR_MESSAGE } from "../const";
import { StyledActorGallery } from "./styled";

export const ActorGallery = () => {
  const { isImagesLoading, images, imagesError, actorName } = formatedActorImagesData();

  return (
    <StyledActorGallery>
      <ContainerUI>
        <MediaSectionHeader
          title="Фото"
          actionLabel="Усі фото"
          onActionClick={() => console.log("redirect to all images")}
          subtitle={actorName}
        />
        {isImagesLoading ? (
          <SkeletonUI types="none" active={true} />
        ) : imagesError ? (
          <ErrorStateUI content={ERROR_MESSAGE} />
        ) : (
          <GridImages images={images} />
        )}
      </ContainerUI>
    </StyledActorGallery>
  );
};
