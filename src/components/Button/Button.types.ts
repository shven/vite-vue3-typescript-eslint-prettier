import type { buttonSizes, buttonStyles } from './Button.constants';

export type ButtonSizeType = (typeof buttonSizes)[number] | string;
export type ButtonStyleType = (typeof buttonStyles)[number] | string;
export type ButtonPropsType = {
    label: string;
    type: ButtonStyleType;
    size?: ButtonSizeType;
};
