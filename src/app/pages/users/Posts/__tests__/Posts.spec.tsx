import { render } from '@testing-library/react';
import { Posts } from '../Posts';
import { UsersProvider } from '../../../../context/UsersProvider';
import { MemoryRouter } from 'react-router-dom';

describe('<Posts /> component', () => {
    it('should render component', () => {
		const {container} = render(
			<UsersProvider>
				<MemoryRouter>
					<Posts />
				</MemoryRouter>
			</UsersProvider>
		);
		expect(container).toMatchSnapshot();
	});
});
