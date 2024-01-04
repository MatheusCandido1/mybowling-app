import { useState } from "react";
import { useGroup } from "../../../hooks/useGroup";
import { useGroupShow } from "../../../hooks/useGroupShow";
import { GamesByGroupFilters } from "../../../services/groupsService/games";
import { ILocation } from "../../../entities/Location";

export function useGamesByGroupFilterModalController() {

  const {
    filters,
    showFilterGamesModal,
    handleCloseFilterGamesModal,
    selectedGroup,
    handleApplyFilters,
    handleResetFilters
  } = useGroup();

  const { groupLocations, groupMembers } = useGroupShow(selectedGroup?.id ?? 0)

  const [currentFilters, setCurrentFilters] = useState<GamesByGroupFilters>({
    start_date: filters.start_date,
    end_date: filters.end_date,
    location: filters.location,
    user: filters.user
  });


  function handleStartDateChange(date: Date) {
    setCurrentFilters((prevState) => ({
      ...prevState,
      start_date: date
    }));
  }

  function handleEndDateChange(date: Date) {
    setCurrentFilters((prevState) => ({
      ...prevState,
      end_date: date
    }));
  }

  function handleLocationChange(location: ILocation, value: any) {
    setCurrentFilters((prevState) => ({
      ...prevState,
      location: value
    }));
  }

  function handleUserChange(user: any, value: any) {
    setCurrentFilters((prevState) => ({
      ...prevState,
      user: value
    }));
  }


  return {
    filters,
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
    handleResetFilters,
  }
}
