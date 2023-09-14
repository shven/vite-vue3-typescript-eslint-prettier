import { buttonSizes, buttonStyles } from '@/constants';

export type Photo = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};

export type Movie = {
    year: string;
    genres: string[];
    ratings: number[];
    poster: string;
    contentRating: string;
    duration: string;
    releaseDate: string;
    averageRating: number;
    storyline: string;
    actors: string[];
    imdbRating: number;
    posterurl: string;
    id: number;
    title: string;
};

export type ButtonSizeType = (typeof buttonSizes)[number] | string;
export type ButtonStyleType = (typeof buttonStyles)[number] | string;
export type ButtonPropsType = {
    label: string;
    type: ButtonStyleType;
    size?: ButtonSizeType;
};
