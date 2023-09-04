export const titleSizes = ['tiny', 'small', 'medium', 'large', 'huge', 'gigantic'] as const satisfies readonly string[];
export const titleLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const satisfies readonly string[];

export type TitleSize = (typeof titleSizes)[number];
export type TitleLevel = (typeof titleLevels)[number];
export type TitleProps = {
    label: string;
    level?: TitleLevel;
    size?: TitleSize;
};
