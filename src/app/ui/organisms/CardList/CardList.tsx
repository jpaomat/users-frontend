import { CardItemProps, CardListProps } from '../../../interfaces';
import { CardItem } from '../../molecules';
import './CardList.scss';

export const CardList = ({ dataList }: CardListProps) => {
	
	return (
		<div className='user-list'>
			<ul className='list-group'>
				{dataList.map((dataItem: CardItemProps, id) => (
					<CardItem key={id} {...dataItem} />
				))}
			</ul>
		</div>
	);
};
