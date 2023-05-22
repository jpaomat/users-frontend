import { render } from '@testing-library/react';
import { Albums } from '../Albums';
import { UsersProvider } from '../../../../context/UsersProvider';
import { MemoryRouter } from 'react-router-dom';

describe('<Albums /> component', () => {
    it('should render component', () => {
		const {container} = render(
			<UsersProvider>
				<MemoryRouter>
					<Albums />
				</MemoryRouter>
			</UsersProvider>
		);
		expect(container).toMatchSnapshot();
	});
});
