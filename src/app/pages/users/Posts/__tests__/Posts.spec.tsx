import { render } from '@testing-library/react';
import { Posts } from '../Posts';
import { UsersProvider } from '../../../../context/UsersProvider';

describe('<Posts /> component', () => {
    it('should render component', () => {
		const {container} = render(
			<UsersProvider>
				<Posts />
			</UsersProvider>
		);
		expect(container).toMatchSnapshot();
	});
});
