import React from 'react';
import { StyledButton } from './assets/styles';
import { ReactComponent as AddIcon } from './assets/iconmonstr-plus-2.svg';


export type Props = {
    onClick: () => void;
    active: boolean;
};

const AddButton: React.FC<Props> = ({onClick, active}) => {
  return (
    <StyledButton active={active} onClick={onClick}>
        <AddIcon /> 
    </StyledButton>
  );
};

export default AddButton;
