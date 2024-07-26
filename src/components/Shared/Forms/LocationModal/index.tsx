import { FlatList, Modal, View, Text, TouchableOpacity } from "react-native";
import { AlleysContainer, AlleysCount, Container, DropdownContainer, DropdownContent, EmptyResultContainer, Header, ItemContainer, ItemText, LocationContainer, Overlay, Title, CloseButton, FooterContainer, FooterButton, FooterButtonText, NewLocationContainer, Form } from "./styles";
import { useAuth } from "../../../../hooks/useAuth";
import { useLocations } from "../../../../hooks/useLocations";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { createRef, useEffect, useRef, useState } from "react";
import { SelectInput } from "../SelectInput";
import { Location } from "../../../../utils/locationHelper";
import { useGame } from "../../../../hooks/useGame";
import { ILocation } from "../../../../entities/Location";
import { BowlingLoader } from "../../BowlingLoader";
import { CustomTextInput } from "../CustomTextInput";
import { MainButton } from "../../Buttons/MainButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LocationsService } from "../../../../services/locationsService";
import { CreateLocationParams } from "../../../../services/locationsService/create";
import Toast from "react-native-toast-message";
import { set } from "lodash";

export function LocationModal() {
  const {closeDropdown, loggedUser } = useAuth();

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
  const [bowlingAlley, setBowlingAlley] = useState<string | null>(null);

  const [cityError, setCityError] = useState<string | null>(null);
  const [stateError, setStateError] = useState<string | null>(null);
  const [bowlingAlleyError, setBowlingAlleyError] = useState<string | null>(null);

  const [option, setOption] = useState('locations');

  const queryClient = useQueryClient();
  const {
    mutateAsync: createLocation,
    isLoading: isCreatingLocation,
  } = useMutation({
    mutationFn: async (data: CreateLocationParams) => {
      return LocationsService.create(data);
    }
  });

  async function onSubmit() {
    try {

      setCityError(null);
      setStateError(null);
      setBowlingAlleyError(null);

      if(selectedCity === null || selectedCity === '') {
        setCityError('City is required.');
      }

      if(selectedState === null || selectedState === '') {
        setStateError('State is required.');
      }

      if(bowlingAlley === null || bowlingAlley === '') {
        setBowlingAlleyError('Bowling Alley name is required.');
      }

      if(selectedCity === null || selectedState === null || bowlingAlley === null || selectedCity === '' || selectedState === '' || bowlingAlley === '') {
        return;
      }

      const payload = {
        city: selectedCity!,
        state: selectedState!,
        name: bowlingAlley!
      }

      await createLocation(payload);
      setOption('locations');
      refetch();

      setBowlingAlley(null);

    } catch (error) {

    }
  }


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
    setStateError(null);
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
    setCityError(null);
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

  const newLocation = () => {
    return (
      <Form>
        <NewLocationContainer>
          <CustomTextInput
            label={"Bowling Alley Name:"}
            icon={"navicon"}
            value={bowlingAlley}
            onChangeText={(value) => setBowlingAlley(value)}
            error={bowlingAlleyError}
          />

        </NewLocationContainer>
        <MainButton label={"Save"} onPress={onSubmit} isLoading={isCreatingLocation} />
      </Form>
    )
  }

  const locationsList = () => {
    return (
      <>
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
      </>
    )
  }

  const footerLabel = () => {
    if (isLoading) {
      return 'Loading...';
    }

    if (option === 'locations') {
      return "Can\'t find your bowling alley? Add here!";
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
              {option === 'newLocation' ? (
              <CloseButton onPress={() => setOption('locations')}>
                <MaterialCommunityIcons name="arrow-left" size={24} color="#000" />
              </CloseButton>
              ):null}
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
          error={stateError}
         />
        </View>
        <View style={{width: '48%'}}>
          <SelectInput
           label="City"
           items={cities}
           value={selectedCity}
           onChange={(value) => handleChangedCity(value)}
           selectRef={cityRef}
          error={cityError}
         />
        </View>

      </LocationContainer>
            {option === 'locations' ? locationsList() : newLocation()}
            </DropdownContent>
            {option === 'locations' && (
            <FooterContainer>
              <FooterButton
                onPress={() => setOption(option === 'locations' ? 'newLocation' : 'locations')}
                disabled={isLoading}
              >
                <FooterButtonText disabled={!isLoading}>{footerLabel()}</FooterButtonText>
              </FooterButton>
            </FooterContainer>
            )}
          </DropdownContainer>
        </Container>
      </Overlay>
    </Modal>
  )
}

