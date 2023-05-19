import { IUserTemplate } from '../../ui/interfaces';
import { LoadingQuote } from '../../ui/molecules';
import { CardList } from '../../ui/organisms';

export const UserTemplate = ({ dataList, isLoadingData }: IUserTemplate) => {
	return (
		<>
			{!isLoadingData ? (
				<LoadingQuote />
			) : (
				<div className='container mt-72'>
					<CardList dataList={dataList} />
				</div>
			)}
		</>
	);
};
