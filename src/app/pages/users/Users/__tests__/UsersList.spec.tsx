import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
const { Users } = require('../Users');

describe('<UserList /> component', () => {
    it('should render component', () => {
		const {container} = render(
			<MemoryRouter>
				<Users />
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});
});
