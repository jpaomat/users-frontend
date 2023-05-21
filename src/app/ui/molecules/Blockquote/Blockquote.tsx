import { IBlockquote } from '../../interfaces';

export const Blockquote = ({title, description, footerText}: IBlockquote) => {
    return (
		<div>
			<blockquote className='blockquote'>
				{title && <p className='font-16'><b>Título: </b>{title}</p>}
				{description && <p className='font-16'>{description}</p>}
			</blockquote>
			<figcaption className='blockquote-footer'>
				<cite title='Source Title'>{footerText}</cite>
			</figcaption>
		</div>
	);
};
