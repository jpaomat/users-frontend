import { IBlockquote } from '../../interfaces';

export const Blockquote = ({description, footerText}: IBlockquote) => {
    return (
		<div>
			<blockquote className='blockquote'>
				<p className='font-16'>{description}</p>
			</blockquote>
			<figcaption className='blockquote-footer'>
				<cite title='Source Title'>{footerText}</cite>
			</figcaption>
		</div>
	);
};
