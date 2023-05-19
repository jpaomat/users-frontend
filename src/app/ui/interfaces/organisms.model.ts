import { ICardItem } from './molecules.model';

export interface INavbar {
    type: string;
    size: string;
}

export interface ICardList {
    dataList: ICardItem[];
}
