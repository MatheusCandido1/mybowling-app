import React from 'react';
import { ButtonContainer, ButtonText, Container, Label, LabelContainer } from './styles';
import { LocationModal } from '../LocationModal';
import { useAuth } from '../../../../hooks/useAuth';
import { useGame } from '../../../../hooks/useGame';

export function LocationInput() {

  const { openDropdown, showDropdown } = useAuth();
  const { selectedLocation } = useGame();

  const label = selectedLocation?.name ?? 'Select an option.';


  return (
    <Container>
      <LabelContainer>
        <Label>Select location</Label>
      </LabelContainer>
      <ButtonContainer onPress={openDropdown}>
        <ButtonText>{label}</ButtonText>
      </ButtonContainer>
      {showDropdown && <LocationModal />}

    </Container>
  )
}
