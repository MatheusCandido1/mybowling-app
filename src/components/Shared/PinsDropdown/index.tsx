import { Pressable, View } from "react-native";
import { BoardArea, Container, DropdownArea, InitialLabel, SplitButton, SplitButtonTitle, SplitHeader, SplitHeaderText } from "./styles";
import { PinIcon } from "../../Icons/PinIcon";
import { useState } from "react";
import { isSplit } from "../../../utils/splitHelper";
import { usePinsDropdownController } from "./usePinsDropdownController";
import { Entypo } from "@expo/vector-icons";

interface PinsDropdownProps {
  onSearchSplit: (splitValue: string) => void;
  label: string;
  selectedSplit?: string;
}

export function PinsDropdown({ onSearchSplit, label, selectedSplit }: PinsDropdownProps) {
  const {
    isOpen,
    closeDropdown,
    toggleDropdown
  } = usePinsDropdownController();

  const rows : number[][] = [
    [7,8,9,10],
    [4,5,6],
    [2,3],
    [1],
  ];


  const [selectedPins, setSelectedPins] = useState<number[]>(selectedSplit!.split("-").map(Number) || []);
  const [splitValue, setSplitValue] = useState(selectedSplit);

  function handlePinPress(pin: number) {
    setSelectedPins((prevSelectedPins) => {
      const updatedSelectedPins = prevSelectedPins.includes(pin)
        ? prevSelectedPins.filter((selectedPin) => selectedPin !== pin)
        : [...prevSelectedPins, pin];
      const currentSplit = updatedSelectedPins.sort((a, b) => a - b);
      // Remove 0 from selected pins
      if (currentSplit.includes(0)) {
        currentSplit.splice(currentSplit.indexOf(0), 1);
      }
      setSplitValue(currentSplit.join('-'));

      return updatedSelectedPins;
    });

  }

  const allowSearch = isSplit(splitValue) || splitValue === '';

  return (
    <>
      <Container
        onPress={toggleDropdown}
        activeOpacity={0.8}
      >
        <InitialLabel>
          {label}
        </InitialLabel>
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
           }}>
             <SplitHeader>
               <SplitHeaderText>{!splitValue ? 'Pins: ' : splitValue}</SplitHeaderText>
             </SplitHeader>
             <BoardArea>
             {rows.map((row, index) => (
               <View key={index} style={{flexDirection: 'row', justifyContent: 'center'}}>
                 {row.map((index) => (
                   <Pressable
                     key={index}
                     onPress={() => handlePinPress(index)}
                   >
                     <PinIcon
                       key={index}
                       height={28}
                       width={28}
                       color={selectedPins.includes(index) ? "#981b1b" : "#0d9488"}
                     />
                   </Pressable>
                 ))}
               </View>
             ))}
             </BoardArea>
             <SplitButton
               disabled={!allowSearch}
               style={{
                 backgroundColor: allowSearch ? '#0d9488' : '#d3d3d3',
               }}
               onPress={() => {
                onSearchSplit(splitValue)
                closeDropdown();
              }}
               >
               <SplitButtonTitle>
                 {splitValue === '' ?  splitValue === '' ?  'Close' : 'Not a Split' : 'Search Split'}
               </SplitButtonTitle>
             </SplitButton>
         </DropdownArea>
      ): null}

    </>
  )
}
