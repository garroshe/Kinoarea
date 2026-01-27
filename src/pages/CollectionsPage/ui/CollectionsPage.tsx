import { Breadcrumbs } from "@/features/Breadcrumbs";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { CollectionsList } from "@/widgets/CollectionsList";
import { Header } from "@/widgets/Header";
import { MailingList } from "@/widgets/MailingList";

import { BREAD_CRUMBS_PATH } from "../const";
import { StyledCollectionsPage, StyledDescription, StyledTitle } from "./styled";

const CollectionsPage = () => {
  return (
    <StyledCollectionsPage>
      <Header />
      <ContainerUI>
        <StyledTitle>Колекція фільмів</StyledTitle>
        <Breadcrumbs path={BREAD_CRUMBS_PATH} />
        <StyledDescription>
          Пориньте у наші великі колекції фільмів! Від позачасової класики до сучасних хітів, знайдіть ідеальні фільми
          для будь-якої нагоди.
        </StyledDescription>
        <CollectionsList />
      </ContainerUI>
      <MailingList />
    </StyledCollectionsPage>
  );
};

export default CollectionsPage;
