import { render } from '@testing-library/react';
import { UserIcon } from '../UserIcon';
import { defaultProps } from './mocks';

describe('<NavbarAuth /> component', () => {

	beforeEach(()=> jest.clearAllMocks);
	
	test('should render component', () => {
		const { container } = render(
			<UserIcon {...defaultProps}/>
		);
		expect(container).toMatchSnapshot();
	});
});
