import { Modal, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ButtonContainer, Container, DateContainer, Footer, Form, Header, LocationContainer, Overlay, Title, UserContainer } from "./styles";
import { SelectInput } from "../../Shared/Forms/SelectInput";
import { MainButton } from "../../Shared/Buttons/MainButton";
import { useGamesByGroupFilterModalController } from "./useGamesByGroupFilterModalController";
import { SecondaryButton } from "../../Shared/Buttons/SecondaryButton";
import { DateInput } from "../../Shared/Forms/DateInput";


export function GamesByGroupFilterModal() {

  const {
    currentFilters,
    showFilterGamesModal,
    handleCloseFilterGamesModal,
    groupLocations,
    groupMembers,
    handleStartDateChange,
    handleEndDateChange,
    handleLocationChange,
    handleUserChange,
    handleApplyFilters,
    handleResetFilters
  } = useGamesByGroupFilterModalController();

  return (
    <Modal
      visible={showFilterGamesModal}
      animationType="fade"
      transparent
      >
        <Overlay>
          <Container>
            <Header>
              <Title>Filter Games</Title>
              <TouchableOpacity
                onPress={handleCloseFilterGamesModal}
              >
                <MaterialCommunityIcons name="close" size={32} color="#000" />
              </TouchableOpacity>
            </Header>
            <Form>
              <DateContainer>
                <DateInput
                 label="Start Date"
                 value={currentFilters.start_date}
                 onChange={handleStartDateChange}
                />
                <DateInput
                 label="End Date"
                 value={currentFilters.end_date}
                 onChange={handleEndDateChange}
                />
              </DateContainer>
              <LocationContainer>
                <SelectInput
                  label="Location"
                  items={groupLocations}
                  value={currentFilters.location}
                  onChange={handleLocationChange}
                  selectedValue={currentFilters.location}
                />
              </LocationContainer>
              <UserContainer>
                <SelectInput
                  label="Member"
                  items={groupMembers}
                  onChange={handleUserChange}
                  value={currentFilters.user}
                  selectedValue={currentFilters.user}
                />
              </UserContainer>
              <Footer>
                <ButtonContainer>
                  <MainButton
                    label="Apply Filters"
                    onPress={() => handleApplyFilters(currentFilters)}
                  />
                </ButtonContainer>
                <ButtonContainer>
                  <SecondaryButton
                    label="Reset Filters"
                    onPress={handleResetFilters}
                  />
                </ButtonContainer>
               </Footer>

            </Form>

          </Container>
        </Overlay>
      </Modal>
  )
}
