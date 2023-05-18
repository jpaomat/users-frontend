import { render } from '@testing-library/react';
import { Navbar } from '../Navbar';
import { MemoryRouter } from 'react-router-dom';

describe('<Navbar /> component', () => {

	beforeEach(()=> jest.clearAllMocks);
	
	test('should render component', () => {
		const { container } = render(
			<MemoryRouter>
				<Navbar />
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});
});
