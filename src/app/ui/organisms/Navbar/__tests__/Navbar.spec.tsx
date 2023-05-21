import { render } from '@testing-library/react';
import { Navbar } from '../Navbar';
import { MemoryRouter } from 'react-router-dom';
import { defaultMock } from './mocks';

describe('<Navbar /> component', () => {

	beforeEach(()=> jest.clearAllMocks);
	
	test('should render component', () => {
		const { container } = render(
			<MemoryRouter>
				<Navbar type='light' size='bg' navbarLinks={defaultMock} />
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});
});
