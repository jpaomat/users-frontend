import { render } from '@testing-library/react';
import { NavbarNav } from '../NavbarNav';
import { MemoryRouter } from 'react-router-dom';
import { defaultMock } from './mock';

describe('<NavbarNav /> component', () => {

	beforeEach(()=> jest.clearAllMocks);
	
	test('should render component', () => {
		const { container } = render(
			<MemoryRouter>
				<NavbarNav navbarItems={defaultMock}/>
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});
});
