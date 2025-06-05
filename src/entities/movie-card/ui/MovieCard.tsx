import {StyledMovieCard} from "./styled.tsx";
import type {IMovieCard} from "../model/types.ts";

export const MovieCard = ({title, genre, img, rating}: IMovieCard) => {
    return (
        <StyledMovieCard>
            <div className="rating">{rating}</div>
            <img src={img} alt={title} />
            <div>
                <h3 className="title">{title}</h3>
                <p className="description">{genre}</p>
            </div>
        </StyledMovieCard>
    )
}