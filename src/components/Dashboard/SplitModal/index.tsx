import { Modal, TouchableOpacity, View } from "react-native";
import { useSplitModalController } from "./useSplitModalController";
import {
  Body,
  Container,
  Content,
  EmptySplitButton,
  EmptySplitButtonText,
  EmptySplitContainer,
  EmptySplitText,
  FilterContainer,
  Footer,
  Header,
  Overlay,
  PinsFilter,
  SortContainer,
  Title
} from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SplitCard } from "../SplitCard";
import { Dropdown } from "../../Shared/Dropdown";
import { useEffect, useState } from "react";
import { PinsDropdown } from "../../Shared/PinsDropdown";
import _ from 'lodash';


export function SplitModal() {

  const {
    showSplitModal,
    handleCloseSplitModal,
    splits
  } = useSplitModalController();

  useEffect(() => {
    if(splits.length > 0) {
      setSortedSplits(splits);
    }
  }, [splits]);

  const [sortedSplits, setSortedSplits] = useState([]);

  const items = ["Attempts", "Converted", "Rate"];

  const [selectedSort, setSelectedSort] = useState('Rate');
  const [selectedSplit, setSelectedSplit] = useState('');

  function handleSearchSplit(splitValue: string) {
    if(splitValue === '') {
      setSelectedSplit('');
      setSortedSplits(splits);
      return;
    };

    setSelectedSplit(splitValue);

    const filteredSplits = splits.filter((split) => split.pins === splitValue);
    setSortedSplits(filteredSplits);
  }

  function handleSelectSort(value: string) {

    let newSortedSplits: any = [];

    if(value === 'Attempts') {
      newSortedSplits = _.orderBy(splits, ["attempted"], ['desc']);
    } else if(value === 'Converted') {
      newSortedSplits = _.orderBy(splits, ["converted"], ['desc']);
    } else if(value === 'Rate') {
      newSortedSplits = _.orderBy(splits, ["rate"], ['desc']);
    } else {
      newSortedSplits = splits;
    }

    setSortedSplits(newSortedSplits)
    setSelectedSort(value);
  }

  const Filter = () => {
    return (
      <FilterContainer>
         <PinsFilter>
          <PinsDropdown
            label={selectedSplit || "Select a split"}
            onSearchSplit={handleSearchSplit}
            selectedSplit={selectedSplit}
          />

          </PinsFilter>
        <SortContainer>
          <Dropdown
            label="Sort by:"
            items={items}
            onSelect={handleSelectSort}
            selectedValue={selectedSort}
          />
        </SortContainer>
      </FilterContainer>
    )
  }

  function resetSplits() {
    setSelectedSplit('');
    setSortedSplits(splits);
  }




  return (
    <Modal
      visible={showSplitModal}
      animationType="fade"
      transparent
    >
      <Overlay>
        <Container>
          <Header>
            <Title>Split Stats</Title>
            <TouchableOpacity onPress={handleCloseSplitModal}>
              <MaterialCommunityIcons name="close" size={32} color="#000" />
            </TouchableOpacity>
          </Header>
          <Body>
          <Filter />
          <Content
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              gap: 16,
            }}
          >
            {sortedSplits.length === 0 ? (
              <EmptySplitContainer>
                <EmptySplitText>No splits found</EmptySplitText>
                <EmptySplitButton
                  onPress={resetSplits}
                >
                  <EmptySplitButtonText>Reset splits</EmptySplitButtonText>
                  <MaterialCommunityIcons name="reload" size={24} color="#0d9488" />
                </EmptySplitButton>
              </EmptySplitContainer>
            ): null}
            {sortedSplits.length > 0 && sortedSplits.map((split, index) => (
              <SplitCard
                split={split.pins}
                attempts={split.attempted}
                converted={split.converted}
                rate={split.rate}
                key={index}
              />
            ))}

          </Content>
          </Body>
          <Footer />
        </Container>
      </Overlay>
    </Modal>
  )
}
