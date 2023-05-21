import { render } from '@testing-library/react';
import { Albums } from '../Albums';
import { UsersProvider } from '../../../../context/UsersProvider';

describe('<Albums /> component', () => {
    it('should render component', () => {
		const {container} = render(
			<UsersProvider>
				<Albums />
			</UsersProvider>
		);
		expect(container).toMatchSnapshot();
	});
});
