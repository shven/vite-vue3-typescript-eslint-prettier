export const buttonSizes = ['small', 'medium', 'large'] as const satisfies readonly string[];
export const buttonStyles = ['primary', 'secondary'] as const satisfies readonly string[];

export type ButtonSizeType = (typeof buttonSizes)[number] | string;
export type ButtonStyleType = (typeof buttonStyles)[number] | string;
export type ButtonPropsType = {
    label: string;
    type: ButtonStyleType;
    size?: ButtonSizeType;
};
