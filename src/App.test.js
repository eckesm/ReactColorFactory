import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';

test('/colors route', () => {
	const { getByText } = render(
		<MemoryRouter initialEntries={[ '/colors' ]}>
			<App />
		</MemoryRouter>
	);
	expect(getByText("Colors... what can't they do!?")).toBeInTheDocument();
});

test('/colors/new route', () => {
	const { getByText } = render(
		<MemoryRouter initialEntries={[ '/colors/new' ]}>
			<App />
		</MemoryRouter>
	);
	expect(getByText('Add to the Rainbow!')).toBeInTheDocument();
});

test('color links', () => {
	const { getByText,getByTestId } = render(
		<MemoryRouter initialEntries={[ '/colors' ]}>
			<App />
		</MemoryRouter>
	);
	const colorLink = getByText('orange');
	fireEvent.click(colorLink);
	expect(getByTestId('orange')).toBeInTheDocument();
});
