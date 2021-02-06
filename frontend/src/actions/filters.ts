import { Filter } from '../types';

export const Canny: Filter = {
  name: 'canny',
  properties: [
    {
      name: 'threshold1',
      value: 100,
    },
    {
      name: 'threshold2',
      value: 180,
    },
  ],
};

export const NotCanny: Filter = {
  name: 'NotCanny',
  properties: [
    {
      name: 'threshold1',
      value: 100,
    },
    {
      name: 'threshold2',
      value: 180,
    },
  ],
};

export {};
