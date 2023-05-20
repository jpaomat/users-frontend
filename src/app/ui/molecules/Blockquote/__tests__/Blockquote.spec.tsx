import { render } from '@testing-library/react';
import { defaultProps } from './mocks';
import { Blockquote } from '../Blockquote';

describe('<BlockquoteUser /> component', () => {

	beforeEach(()=> jest.clearAllMocks);
	
	test('should render component', () => {
		const { container } = render(
				<Blockquote {...defaultProps}/>
		);
		expect(container).toMatchSnapshot();
	});
});
