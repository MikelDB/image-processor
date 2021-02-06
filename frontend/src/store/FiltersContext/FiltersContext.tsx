import React, { createContext, useState } from 'react';
import { Filter, Property } from '../../types';

type ContextProps = {
    filters: Filter[];
    addFilter: (filter: Filter) => void;
    removeFilter: (filterId: string) => void;
    updateFilter: (filter: Filter, property: Property) => void;
};

export const FiltersContext = createContext<ContextProps>({
    filters: [],
    addFilter: (filter: Filter) => console.log('add filter undefined', filter),
    removeFilter: (filterId: string) => console.log('remove filter undefined', filterId),
    updateFilter: (filter: Filter, property: Property) => console.log('update filter not implemented', filter, property),
});

type ContexProviderProps = {
    children: React.ReactElement;
};

export const FiltersContextProvider: React.FC<ContexProviderProps> = ({children}) => {  
    const [ filters, setFilters ] = useState<Filter[]>([{
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
      }]);

    const addFilter = (filter: Filter) => {
        setFilters(prevState => [...prevState, filter]);
    }

    const removeFilter = (filterId: string) => {
        console.log('remove filter');
    };

    const updateFilter = (filter: Filter, property: Property) => {
        console.log('update filter', filter, property);
        const newFilters = filters.map((mappedFilter: Filter): Filter => {
            if (mappedFilter.name === filter.name) {
                return {
                    name: mappedFilter.name,
                    properties: mappedFilter.properties.map((mappedProperty: Property): Property => {
                        if (mappedProperty.name === property.name) {
                            return {
                                name: mappedProperty.name,
                                value: property.value,
                            };
                        } else {
                            return mappedProperty;
                        }
                    })
                }
            } else {
                return mappedFilter;
            }
        })
        setFilters(newFilters);
    }

    const context = { filters, addFilter, removeFilter, updateFilter };

    return (    
        <FiltersContext.Provider value={context}>      
            {children}    
        </FiltersContext.Provider>
    )
};