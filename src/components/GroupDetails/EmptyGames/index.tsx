import { useNavigation } from "@react-navigation/native";
import { Container, ActionButton, ActionButtonText, InformationText } from "./styles";
import { useGames } from "../../../hooks/useGames";
import { useGroup } from "../../../hooks/useGroup";

export function EmptyGames() {

  const { handleResetFilters } = useGroup();

  const navigation  = useNavigation();


  return (
    <Container>
      <InformationText>This group has no games recorded. </InformationText>
      <ActionButton
        onPress={() => {
          navigation.navigate('Tabs', {screen: 'Game'});
        }}
      >
        <ActionButtonText>Create a new game on this group</ActionButtonText>
      </ActionButton>
      <InformationText
        style={{marginTop: 8}}>Or </InformationText>
      <ActionButton
        onPress={() => {
          handleResetFilters();
        }}
      >
        <ActionButtonText>Clear the filters</ActionButtonText>
      </ActionButton>
    </Container>
  )
}
