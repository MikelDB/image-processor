export type Property = {
    name: string;
    value: number;
}

export type Filter = {
    name: string;
    properties: Array<Property>;
};

export {};