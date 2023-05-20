import { INavbarLink, IUserIcon } from './atoms.model';

export interface INavbarNav {
    navbarItems: INavbarLink[];
}

export interface INavbarAuth {
    userName: string;
}

export interface ICardItem {
    userIcon?: IUserIcon;
    description: string;
    footerText: string;
    aditionalInfo: string[];
}

export interface IBlockquote {
    description: string;
    footerText: string;
}