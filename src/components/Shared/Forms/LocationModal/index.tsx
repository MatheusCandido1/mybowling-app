import { FlatList, Modal, View, Text, TouchableOpacity } from "react-native";
import { AlleysContainer, AlleysCount, Container, DropdownContainer, DropdownContent, EmptyResultContainer, Header, ItemContainer, ItemText, LocationContainer, Overlay, Title, CloseButton } from "./styles";
import { useAuth } from "../../../../hooks/useAuth";
import { useLocations } from "../../../../hooks/useLocations";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { createRef, useEffect, useRef, useState } from "react";
import { SelectInput } from "../SelectInput";
import { Location } from "../../../../utils/locationHelper";
import { useGame } from "../../../../hooks/useGame";
import { ILocation } from "../../../../entities/Location";
import { BowlingLoader } from "../../BowlingLoader";


export function LocationModal() {
  const { closeDropdown, loggedUser } = useAuth();

  const stateRef = createRef();
  const cityRef = createRef();

  const {
    selectedLocation,
    handleSelectedLocation
  } = useGame();

  let userCity = selectedLocation ? selectedLocation.city : (loggedUser?.profile.city ? loggedUser?.profile.city.toString() : null);
  let userState = selectedLocation ? selectedLocation.state : (loggedUser?.profile.state ? loggedUser?.profile.state.toString() : null);

  const [selectedState, setSelectedState] = useState<string | null>(userState);
  const [selectedCity, setSelectedCity] = useState<string | null>(userCity);


  const { locations, isLoading, refetch } = useLocations({
    state: selectedState,
    city: selectedCity
  });

  useEffect(() => {
    if(userState && userCity) {
      setSelectedState(userState);
      setCities(Location[userState].map((city, index) => ({
        id: city,
        name: city
      })).sort((a, b) => a.name.localeCompare(b.name)));
      setSelectedCity(userCity);
      refetch();
    }
  }, [userState, userCity])



  const [cities, setCities] = useState<string[]>([]);
  const states = Object.keys(Location)
  .map((state) => ({
    id: state,
    name: state
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

  function handleSelectLocation(location: ILocation) {
    handleSelectedLocation(location);
    closeDropdown();
  }

  function handleChangedState(state: string) {
    setSelectedState(state);
    setSelectedCity(null);
    if (cityRef.current) {
      cityRef.current.reset();
    }
    setCities(Location[state].map((city) => ({
      id: city,
      name: city
    })).sort((a, b) => a.name.localeCompare(b.name)));
  }

  function handleChangedCity(city: string) {
    setSelectedCity(city);
  }

  useEffect(() => {
    if (selectedState !== null && selectedCity !== null) {
      refetch();
    }
  }, [selectedState, selectedCity]);

  const alleysCountLabel = () => {
    if (locations.length === 0) {
      return '';
    }

    if (locations.length === 1) {
      return '1 Bowling Alley was found.';
    }

    return `${locations.length} Bowling Alleys were found.`;
  }


  function EmptyResult() {
    if(isLoading) {
      return (
        <EmptyResultContainer>
          <BowlingLoader />
        </EmptyResultContainer>
      );
    } else {
      if(selectedState === null) {
        return (
        <EmptyResultContainer>
          <Text>Select a state.</Text>
        </EmptyResultContainer>
        )
      }
      if(selectedCity === null) {
        return (
        <EmptyResultContainer>
          <Text>Select a city.</Text>
        </EmptyResultContainer>
        )
      }

      if(locations.length === 0) {
        return (
          <EmptyResultContainer>
            <Text>No Bowling Alleys found.</Text>
          </EmptyResultContainer>
        )
      }
    }
  }


  return (
    <Modal
      animationType='none'
      transparent={true}
      visible={true}
    >
      <Overlay>
        <Container>
          <DropdownContainer>
          <Header>
            <Title></Title>
            <CloseButton onPress={closeDropdown}>
              <MaterialCommunityIcons name="close" size={24} color="#000" />
            </CloseButton>
          </Header>
            <DropdownContent>
            <LocationContainer>
              <View style={{width: '48%'}}>
                <SelectInput
                label="State"
                items={states}
                value={selectedState}
                onChange={(value) => handleChangedState(value)}
                selectRef={stateRef}
               />
              </View>
              <View style={{width: '48%'}}>
                <SelectInput
                 label="City"
                 items={cities}
                 value={selectedCity}
                 onChange={(value) => handleChangedCity(value)}
                 selectRef={cityRef}
               />
              </View>

            </LocationContainer>
            {isLoading ? <BowlingLoader /> : (
              <>
                {(selectedCity === null || selectedState === null) ? (
                  <EmptyResult />
                ):(
                <>
                <AlleysCount> {alleysCountLabel()} </AlleysCount>
                <AlleysContainer>
                  <FlatList
                    data={locations}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={<EmptyResult />}
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
                  </>
                )}
              </>
            )}


            </DropdownContent>

          </DropdownContainer>
        </Container>
      </Overlay>
    </Modal>
  )
}

