import { useEffect, useState } from "react";
import { useLocations } from "../../../hooks/useLocations";
import { GamesFilters } from "../../../services/gamesService/getAll";
import { useGames } from "../../../hooks/useGames";
import { ILocation } from "../../../entities/Location";
import { IBall } from "../../../entities/Ball";

export function useGamesFilterModalController() {
  const { locations } = useLocations();

  const { handleCloseFiltersModal, handleApplyFilters, filters, handleResetFilters } = useGames();


  const [currentFilters, setCurrentFilters] = useState<GamesFilters>({
    start_date: filters.start_date,
    end_date: filters.end_date,
    location: filters.location,
    ball: filters.ball
  });

  function handleResetCurrentFilters() {
    handleResetFilters();
  }


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

  function handleBallChange(ball: IBall, value: any) {
    setCurrentFilters((prevState) => ({
      ...prevState,
      ball: value
    }));
  }

  return {
    locations,
    handleCloseFiltersModal,
    handleApplyFilters,
    filters,
    currentFilters,
    handleStartDateChange,
    handleEndDateChange,
    handleLocationChange,
    handleBallChange,
    handleResetCurrentFilters
  }
}
