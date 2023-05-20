import PropTypes from 'prop-types';
import { ICardItem } from '../../interfaces';

import './CardItem.scss';
import { UserIcon } from '../../atoms';
import { Blockquote } from '../Blockquote/Blockquote';

export const CardItem = ({ userIcon, description, footerText, aditionalInfo }: ICardItem) => {
	return (
		<li className='list-group-item'>
			<div className=' d-flex m-8 justify-content-between'>
				{userIcon && <UserIcon {...userIcon} />}
				<Blockquote description={description} footerText={footerText} />
				<div className='item-info__aditional'>
					{aditionalInfo.map((text, id) => (
						<p key={id} className='text-primary font-16'>
							{text}
						</p>
					))}
				</div>
			</div>
		</li>
	);
};

CardItem.defaultProps = {
	userIcon: {},
	description:'', 
	footerText:'', 
	aditionalInfo: [],
};

CardItem.propTypes = {
	userIcon: PropTypes.shape({}),
	description:PropTypes.string, 
	footerText:PropTypes.string, 
	aditionalInfo: PropTypes.arrayOf,
};
