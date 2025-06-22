import { StyledNowPlaying, StyledNowPlayingWrapper } from './styled.tsx';
import { GenreTabs } from '../../../features/movie-filter/ui/GenreTabs.tsx';
import { MovieCard } from '../../../entities/movie-card/ui/MovieCard.tsx';
import card from '../../../shared/assets/atTheMoment/card1.jpg';
import { SectionTitles } from '../../../shared/ui/SectionTitles/SectionTitles.tsx';

const arr = [
  { img: card, title: 'Втеча з Преторії', genre: 'Трилер', rating: 6.1, id: 1 },
  { img: card, title: 'Втеча з Преторії', genre: 'Трилер', rating: 6.1, id: 2 },
  { img: card, title: 'Втеча з Преторії', genre: 'Трилер', rating: 6.1, id: 3 },
  { img: card, title: 'Втеча з Преторії', genre: 'Трилер', rating: 6.1, id: 4 },
  { img: card, title: 'Втеча з Преторії', genre: 'Трилер', rating: 6.1, id: 5 },
  { img: card, title: 'Втеча з Преторії', genre: 'Трилер', rating: 6.1, id: 6 },
  { img: card, title: 'Втеча з Преторії', genre: 'Трилер', rating: 6.1, id: 7 },
  { img: card, title: 'Втеча з Преторії', genre: 'Трилер', rating: 6.1, id: 8 },
];

export const NowPlaying = () => {
  return (
    <StyledNowPlaying>
      <div className="container">
        <div className="bg-main" />
        <StyledNowPlayingWrapper>
          <SectionTitles title="Зараз у кіно" />
          <div className="divider" />
          <GenreTabs />
        </StyledNowPlayingWrapper>
        <div className="cards">
          {arr.map((item) => {
            return (
              <MovieCard
                title={item.title}
                genre={item.genre}
                img={item.img}
                rating={item.rating}
                key={item.id}
              />
            );
          })}
        </div>
        <button>Усі новинки</button>
      </div>
    </StyledNowPlaying>
  );
};
