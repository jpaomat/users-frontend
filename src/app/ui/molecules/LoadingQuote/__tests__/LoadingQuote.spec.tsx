import { render } from '@testing-library/react';
import { LoadingQuote } from '../LoadingQuote';

describe('<NavbarAuth /> component', () => {

	beforeEach(()=> jest.clearAllMocks);
	
	test('should render component', () => {
		const { container } = render(
			<LoadingQuote />
		);
		expect(container).toMatchSnapshot();
	});
});
