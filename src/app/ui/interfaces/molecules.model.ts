import { INavbarLink, IUserIcon } from './atoms.model';

export interface INavbarNav {
    navbarItems: INavbarLink[];
}

export interface INavbarAuth {
    userName: string;
}

export interface ICardItem {
    userIcon?: IUserIcon;
    title?: string;
    description?: string;
    footerText: string;
    aditionalInfo: string[];
}

export interface IBlockquote {
    title?: string;
    description?: string;
    footerText: string;
}