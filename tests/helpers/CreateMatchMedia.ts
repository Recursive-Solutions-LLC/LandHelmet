var mediaQuery = require('css-mediaquery');

export function CreateMatchMedia(width: string = '640px') {
  // window.matchMedia(`(max-width: ${width}px)`); //this is temporal, having issues with mediaquery
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: mediaQuery.match(query, { width }),
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
};
