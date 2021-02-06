
import { GlobalStyle } from '../src/utilities';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#282c34',
      },
      {
        name: 'white',
        value: '#ffffff',
      },
    ],
  },
};

export const decorators = [(Story) => <><GlobalStyle /><Story/></>];