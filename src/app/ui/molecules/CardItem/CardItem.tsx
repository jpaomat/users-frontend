// import { Blockquote, UserIcon } from '../../../ui';
import { CardItemProps } from '../../../interfaces';
import { UserIcon } from '../../atoms';
import { Blockquote } from '../Blockquote/Blockquote';
import './CardItem.scss';

export const CardItem = ({ userIconProps, title, description, footerText, aditionalInfo }: CardItemProps) => {
	return (
		<li className='list-group-item card-item'>
			{userIconProps && <UserIcon {...userIconProps} />}
			<div className='card-item__content'>
				<Blockquote title={title} description={description} footerText={footerText} />
				<div className='item-info__aditional'>
					{aditionalInfo.map((text, id) => (
						<p key={id} className='text-primary font-14'>
							{text}
						</p>
					))}
				</div>
			</div>
		</li>
	);
};
