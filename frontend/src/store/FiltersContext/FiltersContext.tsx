import React, { createContext, useState, useContext, useEffect } from 'react';
import { Filter, Property } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import { ImagesContext } from 'store';

type ContextProps = {
  filters: Filter[];
  addFilter: (filter: Filter) => void;
  removeFilter: (filter: Filter) => void;
  updateFilter: (filter: Filter, property: Property) => void;
};

export const FiltersContext = createContext<ContextProps>({
  filters: [],
  addFilter: (filter: Filter) => console.log('add filter undefined', filter),
  removeFilter: (filter: Filter) =>
    console.log('remove filter undefined', filter),
  updateFilter: (filter: Filter, property: Property) =>
    console.log('update filter not implemented', filter, property),
});

type ContexProviderProps = {
  children: React.ReactElement;
};

export const FiltersContextProvider: React.FC<ContexProviderProps> = ({
  children,
}) => {
  const { imageToProcessFile, pushImage } = useContext(ImagesContext);
  const [filters, setFilters] = useState<Filter[]>([]);

  const addFilter = (filter: Filter) => {
    setFilters((prevState) => [...prevState, { ...filter, id: uuidv4() }]);
  };

  const removeFilter = (filterToRemove: Filter) => {
    setFilters((prevState) =>
      prevState
        .filter((filter) => filter.id !== filterToRemove.id)
        .map((filter) => filter)
    );
  };

  const updateFilter = (filterToUpdate: Filter, property: Property) => {
    setFilters((prevState) =>
      prevState.map((filter) => {
        if (filter.id === filterToUpdate.id) {
          return {
            ...filterToUpdate,
            properties: filterToUpdate.properties.map(
              (mappedProperty: Property): Property => {
                if (mappedProperty.name === property.name) {
                  return {
                    name: mappedProperty.name,
                    value: property.value,
                  };
                } else {
                  return mappedProperty;
                }
              }
            ),
          };
        }
        return filter;
      })
    );
  };

  const context = { filters, addFilter, removeFilter, updateFilter };

  useEffect(() => {
    pushImage(imageToProcessFile, filters);
  }, [filters, pushImage, imageToProcessFile]);

  return (
    <FiltersContext.Provider value={context}>
      {children}
    </FiltersContext.Provider>
  );
};
