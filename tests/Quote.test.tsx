import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '@/app/components/containers/Quote';

describe('tests for quote component', () => {
    it('test svg icons', () => {
        // this component has errors with the svg
        // run tests to check
        render(<Quote />);

        const icons = Array.from(document.querySelectorAll('svg')); //we query all svg elements
        
        expect(icons.length).toBeGreaterThan(0);                    // check that at least he have 1 svg

        icons.forEach(icon => {
            expect(icon).toBeInTheDocument();                       // check that renders in the document
        });
    });
});
