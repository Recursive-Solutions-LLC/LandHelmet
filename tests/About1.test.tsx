import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About1 from '@/app/components/containers/About';

// another parameterless component
describe('tests for about component', () => {
    it('test the blog images', () => {
        render(<About1 />);

        const blogImages = screen.getAllByAltText("blog")
            .map(element => element as HTMLImageElement);

        expect(blogImages.length).toBeGreaterThan(0);

        blogImages.forEach(image => {
            expect(image).toBeInTheDocument();
            expect(image.src).toBeDefined();
        });
    });

    //everything else in this component is static
})