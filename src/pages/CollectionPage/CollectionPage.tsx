import { CollectionMovies } from "@/widgets/CollectionMovies";
import { Header } from "@/widgets/Header";
import { MailingList } from "@/widgets/MailingList";

const CollectionPage = () => {
  return (
    <>
      <Header />
      <CollectionMovies />
      <MailingList />
    </>
  );
};

export default CollectionPage;
