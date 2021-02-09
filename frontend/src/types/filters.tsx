export type Property = {
  name: string;
  value: number;
};

export type Filter = {
  id?: string;
  name: string;
  properties: Array<Property>;
};

export {};
