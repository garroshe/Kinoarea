import { CollectionCard } from "@/features/CollectionCard";
import { ContainerUI } from "@/shared/ui/ContainerUI";

import { COLLECTION_LIST_CONFIG } from "../const";
import { StyledCollectionsList } from "./styled";

export const CollectionsList = () => {
  return (
    <ContainerUI>
      <StyledCollectionsList>
        {COLLECTION_LIST_CONFIG.map((item) => (
          <CollectionCard
            key={item.id}
            title={item.title}
            id={item.id}
            imageTitle={item.imageTitle}
            limit={item.limit}
          />
        ))}
      </StyledCollectionsList>
    </ContainerUI>
  );
};
