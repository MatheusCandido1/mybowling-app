import { Modal, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BallContainer, ButtonContainer, Container, DateContainer, Footer, Form, Header, LocationContainer, Overlay, Title } from "./styles";
import { BallSelectInput } from "../../Shared/Forms/BallSelectInput";
import { SelectInput } from "../../Shared/Forms/SelectInput";
import { MainButton } from "../../Shared/Buttons/MainButton";
import { useGamesFilterModalController } from "./useGamesFilterModalController";
import { SecondaryButton } from "../../Shared/Buttons/SecondaryButton";
import { DateInput } from "../../Shared/Forms/DateInput";
import { FilterGamesModalHeight } from "../../../utils/modalHeightByDevice";



interface GameFilterModalProps {
  showModal: boolean;
}

export function GamesFilterModal({ showModal }: GameFilterModalProps ) {

  const {
    locations,
    handleCloseFiltersModal,
    handleApplyFilters,
    currentFilters,
    handleStartDateChange,
    handleEndDateChange,
    handleBallChange,
    handleLocationChange,
    handleResetCurrentFilters
  } = useGamesFilterModalController();


  const ModalHeight = FilterGamesModalHeight()?.dimension;

  return (
    <Modal
      visible={showModal}
      animationType="fade"
      transparent
      >
        <Overlay>
          <Container
            style={{
              marginTop: ModalHeight
            }}
          >
            <Header>
              <Title>Filter Games</Title>
              <TouchableOpacity
                onPress={handleCloseFiltersModal}
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
                 onChange={handleStartDateChange}
                />
              </DateContainer>

              <LocationContainer>
                <SelectInput
                  label="Location"
                  items={locations}
                  value={currentFilters.location}
                  onChange={handleLocationChange}
                  selectedValue={currentFilters.location}
                />
              </LocationContainer>
              <BallContainer>
                <BallSelectInput
                  label="Ball"
                  value={currentFilters.ball}
                  onChange={handleBallChange}
                />
              </BallContainer>
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
                    onPress={handleResetCurrentFilters}
                  />
                </ButtonContainer>
               </Footer>

            </Form>

          </Container>
        </Overlay>
      </Modal>
  )
}
