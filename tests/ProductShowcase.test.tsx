import { render, screen } from '@testing-library/react';
import ShowCase from "@/app/components/containers/ShowCase";
import '@testing-library/jest-dom';


describe('testing ProductShowcase component', () => {
    // parameters
    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 0.8, x: 0, y: 0},
      
    }

    const imgSrc = "/images/helmet-feature1@2x.png";
    const iconSrc = ['/images/icon_pc.svg',"/images/icon_inmold.svg"];
    const title = "NOT JUST AN ORDINARY SHELL";
    const description = "InMould technology makes the helmet lighter and very firm. This technology is currently the best one for making ultralight helmets and providing you maximum protection. How does InMould work? Expandable polystyrene is injected into our polycarbonate shells under pressure, heat and steam. The inner and outer shell are just one piece, they will not separate, so you can enjoy your ride to the fullest." ;
    
    // strings that needs to be encoded before checking
    const encodedImgSrc = encodeURIComponent(imgSrc);   //the img url should be "URLfied" before checking

    //we render the image here
    beforeAll(() => {
        //we render the component
        render(<ShowCase title={title}
            description={description}
            image={imgSrc}
            icon={iconSrc} 
            variants={variants}/>);
    })

    it('the image of the component should render ok and should use the parametered image', () => {
        //we extract the image from the rendering mock screen
        const img = screen.getByAltText("mockup") as HTMLImageElement;

        expect(img).toBeDefined();                  // check that the ecm6 is working great
        expect(img).toBeInTheDocument();            // check that the image is rendered in the document
        expect(img.src).toContain(encodedImgSrc);   // check that the image is using our src
        expect(img.width).toBe(1500);               // check that renders in the desired width
        expect(img.height).toBe(1500);              // check that renders in the desired height
    });

    it('the icons of the component should render ok and should use the parametered image', () => {
        render(<ShowCase title={title}
            description={description}
            image={imgSrc}
            icon={iconSrc} 
            variants={variants}/>);

        const icons = Array.from(document.querySelectorAll('img[alt="icon"]'))
                        .map(element => element as HTMLImageElement);

        //screen.debug(icons)

        expect(icons.length).toBe(iconSrc.length);  //check that we have the right number of icons

        icons.forEach(icon => {
            expect(icon).toBeInTheDocument();                           // check that rendered
            expect(icon.src).toBeDefined();                             // check that has an src
            expect(checkSrcInArray(icon.src, iconSrc)).toBeTruthy();    // check that rendered OUR images
            expect(icon.width).toBe(30);                                // check that has the right width
            expect(icon.height).toBe(30);                               // check that has the right height
        });
    });

    it('the title should be displayed in a h1 tag', () => {
        render(<ShowCase title={title}
            description={description}
            image={imgSrc}
            icon={iconSrc} 
            variants={variants}/>);

        const titleTag = screen.getByText(title);   // select element

        expect(titleTag).toBeInTheDocument();       // check that rendered correctly
        expect(titleTag).toHaveTextContent(title);  // check that element has the right content
        expect(titleTag.nodeName).toBe("H1");       // check that indeed is an h1 element
    });

    it('should test the description', () => {
        render(<ShowCase title={title}
            description={description}
            image={imgSrc}
            icon={iconSrc} 
            variants={variants}/>);

        const descTag = screen.getByText(description);  // select element

        expect(descTag).toBeInTheDocument();            // check that rendered correctly
        expect(descTag).toHaveTextContent(description); // check that element has the right content
    });
});

//this function is for checking if an image src is contained in an array
function checkSrcInArray(imgSrc: string, arrayOfSrc: string[])
 {
    // remember that array.forEach will continue iterating, even if you return
    for(let x = 0, len = arrayOfSrc.length; x < len; x++) {
        // if the image src includes the current array element
        if(imgSrc.includes(arrayOfSrc[x])) {
            return true;
        }
    }

    return false;
 }