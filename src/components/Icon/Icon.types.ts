import { iconSizes } from './Icon.constants';
import { iconNames } from './Icon.constants.generated';

export type IconSizeType = (typeof iconSizes)[number];
export type IconNameType = (typeof iconNames)[number];
export type IconType = {
    name: IconNameType;
    size: IconSizeType;
};
