import { UserTemplateProps } from '../../interfaces';
import { CardList, LoadingQuote } from '../../ui';

export const UserTemplate = ({ dataCardList, isLoadingData }: UserTemplateProps) => {
	return (
		<>
			{!isLoadingData ? (
				<LoadingQuote />
			) : (
				<div className='container mt-72'>
					<CardList dataList={dataCardList} />
				</div>
			)}
		</>
	);
};
