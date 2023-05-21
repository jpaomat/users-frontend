import { INavbarLink } from './atoms.model';
import { ICardItem } from './molecules.model';

export interface INavbar {
    type: string;
    size: string;
    navbarLinks: Array<INavbarLink>
}

export interface ICardList {
    dataList: ICardItem[];
}
