import { FlatList, Modal, View, Text } from "react-native";
import { AlleysContainer, Container, DropdownContainer, DropdownContent, ItemContainer, ItemText, LocationContainer, Overlay } from "./styles";
import { useClickOutside } from 'react-native-click-outside';
import { useAuth } from "../../../../hooks/useAuth";
import { useLocations } from "../../../../hooks/useLocations";
import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { SelectInput } from "../SelectInput";
import { Location } from "../../../../utils/locationHelper";

interface DropdownModalProps {
  selectedLocation: number;
}

export function DropdownModal({ selectedLocation }: DropdownModalProps) {
  const { showDropdown, closeDropdown, loggedUser } = useAuth();

  const { locations } = useLocations();

  const [cities, setCities] = useState<string[]>([]);
  const states = Object.keys(Location)
  .map((state) => ({
    id: state,
    name: state
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

  const ref = useClickOutside<View>(() => closeDropdown());

  const userCity = loggedUser?.profile.city.toString();
  const userState = loggedUser?.profile.state.toString();

  useEffect(() => {
    if (userState) {
      const cities = Location[userState];
        setCities(cities.map((city, index) => ({
          id: city,
          name: city
        })).sort((a, b) => a.name.localeCompare(b.name)
      ));
    }
  }, [userState])

  const filteredLocations = locations.filter((location) => {
    if (userState && userCity) {
      return location.state === userState && location.city === userCity;
    }
    return false;
  })

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={showDropdown}
    >
      <Overlay>
        <Container>
          <DropdownContainer ref={ref}>
            <DropdownContent>

            <LocationContainer>
              <View style={{width: '48%'}}>
                <SelectInput
                 label="State"
                 items={states}
                 value={userState}
               />
              </View>
              <View style={{width: '48%'}}>
                <SelectInput
                 label="City"
                 items={cities}
                 value={userCity}
               />
              </View>

            </LocationContainer>
            <AlleysContainer>
              <FlatList
                data={filteredLocations}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <ItemContainer>
                    <ItemText>{item.name}</ItemText>
                    {selectedLocation === item.id && (
                      <Feather name="check-circle" size={20} color="#0d9488" />
                    )}
                  </ItemContainer>
                )}
              />

            </AlleysContainer>
            </DropdownContent>

          </DropdownContainer>
        </Container>
      </Overlay>
    </Modal>
  )
}

