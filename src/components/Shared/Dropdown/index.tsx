import { Container, DropdownArea, InitialLabel, ItemContainer, ItemLabel, OptionContainer } from "./styles";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { useDropdownController } from "./useDropdownController";

interface DropdownProps {
  label: string;
  items: string[];
  onSelect: (value: string) => void;
  selectedValue?: string;
}

export function Dropdown({ label, items, onSelect, selectedValue }: DropdownProps) {

  const {
    isOpen,
    closeDropdown,
    toggleDropdown
  } = useDropdownController();

  return (
    <>
      <Container
        onPress={toggleDropdown}
        activeOpacity={0.8}
      >
        <InitialLabel>{label} {selectedValue}</InitialLabel>
        <Entypo name={isOpen ? 'chevron-up':'chevron-down'} size={20} color="black" />

      </Container>
      {isOpen ? (
         <DropdownArea
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
          >

          {items.map((item, index) => (
            <ItemContainer
              key={index}
              onPress={() => {
                onSelect(item);
                closeDropdown();
              }}
              style={{
                backgroundColor: selectedValue === item ? '#F5F5F5' : '#FFF',
              }}
            >
              <OptionContainer>
                <ItemLabel>{item}</ItemLabel>
                {selectedValue === item ? <AntDesign name="closecircle" size={16} color="#939393" /> : null}
              </OptionContainer>
          </ItemContainer>

          ))}
        </DropdownArea>
      ): null}


    </>
  )
}
