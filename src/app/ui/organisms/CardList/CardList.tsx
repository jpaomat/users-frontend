import { ICardItem, ICardList } from '../../interfaces';
import { CardItem } from '../../molecules/CardItem/CardItem';
import './CardList.scss';

export const CardList = ({ dataList }: ICardList) => {
	return (
		<div className='user-list'>
			<ul className='list-group'>
				{dataList.map((dataItem: ICardItem, id) => (
					<CardItem key={id} {...dataItem} />
				))}
			</ul>
		</div>
	);
};
