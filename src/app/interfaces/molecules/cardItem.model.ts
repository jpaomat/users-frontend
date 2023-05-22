import { UserIconProps } from '../atoms';

export interface CardItemProps {
    userIconProps?: UserIconProps;
    title?: string;
    description?: string;
    footerText: string;
    aditionalInfo: IAditionalInfo[];
}

interface IAditionalInfo {
    text: string;
    redirectTo?: Function;
}