import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '@/app/components/layout/Footer';

// another parameterless component
describe('testing the footer component', () => {
    it('check logo image', () => {
        render(<Footer />); 

        const img = screen.getByAltText('logo') as HTMLImageElement;

        expect(img).toBeInTheDocument();    // we check that the img rendered correctly
        expect(img.src).toBeDefined();      // we check that has a defined src (this should be parameted)
        expect(img.width).toEqual(170);     // we check the width
        expect(img.height).toEqual(50);     // we check the height
    });

    it('check svg images', () => {
        //this component has errors, run tests to check
        //you are definig an invalid property in the svg component
        //in this case, i recomend to use the role property of the div
        //for a more intuitive component
        render(<Footer />);

        const icons = Array.from(document.querySelectorAll('svg')); //we query all svg elements
        
        expect(icons.length).toBeGreaterThan(0);                    // check that at least he have 1 svg

        icons.forEach(icon => {
            expect(icon).toBeInTheDocument();                       // check that renders in the document
        });
    });

    //everything else in this component is static
})