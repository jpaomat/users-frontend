import { UserIconProps } from '../atoms';

export interface CardItemProps {
    userIconProps?: UserIconProps;
    title?: string;
    description?: string;
    footerText: string;
    aditionalInfo: string[];
}