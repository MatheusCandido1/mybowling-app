import { FlatList, Modal, View, Text } from "react-native";
import { AlleysContainer, Container, DropdownContainer, DropdownContent, EmptyResultContainer, ItemContainer, ItemText, LocationContainer, Overlay } from "./styles";
import { useClickOutside } from 'react-native-click-outside';
import { useAuth } from "../../../../hooks/useAuth";
import { useLocations } from "../../../../hooks/useLocations";
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { SelectInput } from "../SelectInput";
import { Location } from "../../../../utils/locationHelper";
import { useGame } from "../../../../hooks/useGame";
import { ILocation } from "../../../../entities/Location";
import { BowlingLoader } from "../../BowlingLoader";


export function LocationModal() {
  const { closeDropdown, loggedUser } = useAuth();

  const {
    selectedLocation,
    handleSelectedLocation
  } = useGame();


  const userCity = selectedLocation ? selectedLocation.city : (loggedUser?.profile.city ? loggedUser?.profile.city.toString() : null);
  const userState = selectedLocation ? selectedLocation.state : (loggedUser?.profile.state ? loggedUser?.profile.state.toString() : null);


  const [selectedState, setSelectedState] = useState<string | null>('');
  const [selectedCity, setSelectedCity] = useState<string | null>('');

  const { locations, isLoading, refetch } = useLocations({
    state: selectedState,
    city: selectedCity
  });


  const [cities, setCities] = useState<string[]>([]);
  const states = Object.keys(Location)
  .map((state) => ({
    id: state,
    name: state
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

  const ref = useClickOutside<View>(() => closeDropdown());

  useEffect(() => {
    if (userCity) {
      setSelectedCity(userCity);
    }

    if (userState) {
      setSelectedState(userState);
    }
  }, [userCity, userState])

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

  function handleSelectLocation(location: ILocation) {
    handleSelectedLocation(location);
    closeDropdown();
  }

  function handleChangedState(state: string) {
    setSelectedCity(null);
    setSelectedState(state);
    setCities(Location[state].map((city, index) => ({
      id: city,
      name: city
    })).sort((a, b) => a.name.localeCompare(b.name)));
  }

  function handleChangedCity(city: string) {
    setSelectedCity(city);
  }


  useEffect(() => {
    refetch();
  }, [selectedState, selectedCity]);


  const EmptyResult = () => (
    <EmptyResultContainer>
      {isLoading && <BowlingLoader />}
      {selectedCity === null && (<Text>Select a city.</Text>)}
      {selectedState === null && (<Text>Select a state.</Text>)}
      {selectedCity !== null && selectedState !== null && !isLoading && <Text>No locations found.</Text>}
    </EmptyResultContainer>
  )

  return (
    <Modal
      animationType='none'
      transparent={true}
      visible={true}
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
                 value={selectedState}
                  onChange={(value) => handleChangedState(value)}
               />
              </View>
              <View style={{width: '48%'}}>
                <SelectInput
                 label="City"
                 items={cities}
                 value={selectedCity}
                 onChange={(value) => handleChangedCity(value)}
               />
              </View>

            </LocationContainer>

              <AlleysContainer>
              <FlatList
                data={locations}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={EmptyResult}
                renderItem={({ item }) => (
                  <ItemContainer
                    onPress={() => handleSelectLocation(item)}
                  >
                    <ItemText>{item.name}</ItemText>
                    {selectedLocation?.id === item.id && (
                      <AntDesign name="closecircleo" size={20} color="#e11d48" />
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

