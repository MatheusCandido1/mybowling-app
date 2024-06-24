import React from 'react';
import { ButtonContainer, Container } from './styles';
import { DropdownModal } from '../DropdownModal';
import { useAuth } from '../../../../hooks/useAuth';

export function DropdownInput() {

  const { openDropdown } = useAuth();


  return (
    <Container>
      <ButtonContainer onPress={openDropdown}></ButtonContainer>
      <DropdownModal
        selectedLocation={1}
      />

    </Container>
  )
}
