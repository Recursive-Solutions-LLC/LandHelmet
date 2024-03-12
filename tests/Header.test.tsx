import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import Header from '@/app/components/containers/Header';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { CreateMatchMedia } from './helpers';

// he really needs to use parameters on his components.
// because the way he did it, the margin of testeable
// objects is too short.
describe('testing the header component', () => {

    beforeAll(() => {
        window.scrollTo = jest.fn();
        window.HTMLDivElement.prototype.scrollIntoView = jest.fn();
    })

    it('test popover button is showing in mobile device', async() => {
        CreateMatchMedia();                                     // we set mobile device screen
        render(<Header/>);

        const button = screen.getByText("Open menu");           // extract the open button
        expect(button).toBeInTheDocument();                     // check if it is in the document

        await waitFor(() => {
            fireEvent.click(button);                            // we click the button

            const closeButton = screen.getByText('Close menu'); // then we extract the close button

            expect(closeButton).toBeInTheDocument();            //check if the close button is enabled
        });
    });

    it('test sign up', () => {
        render(<Header/>);

        const button = screen.getByText("Sign up");         // extract the element
        expect(button).toBeInTheDocument();                 // we check that the element is rendered
        expect(button).toHaveAttribute('href', 'register'); // we check the anchor url
    });

    it('test login', () => {
        render(<Header/>);

        const button = screen.getByText("Login");           // extract the element
        expect(button).toBeInTheDocument();                 // we check that the element is rendered
        expect(button).toHaveAttribute('href', 'register'); //he has the same url for this and register
    });

    afterEach(cleanup);
});
