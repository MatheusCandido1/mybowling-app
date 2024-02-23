import { useEffect, useState } from "react";
import { useDashboard } from "../../../hooks/useDashboard";
import { useDashboardGetAll } from "../../../hooks/useDashboardGetAll";
import { useDashboardMonthly } from "../../../hooks/useDashboardMonthly";
import { MonthlyInterface } from "../../../services/dashboardService/monthly";
import { format } from 'date-fns';


export function useAverageModalController() {
  const [params, setParams] = useState<MonthlyInterface>({
    year: new Date().getFullYear(),
    month: new Date().getMonth()
  });

  const {
    monthly,
    average,
    total_games,
    refetch,
    isRefetching,
    isFetching
  } = useDashboardMonthly(params)

  function handleYearChange(type: 'increment' | 'decrement') {
    setParams((prevState) => ({
      ...prevState,
      year: type === 'increment' ? prevState.year + 1 : prevState.year - 1
    }));
  }

  useEffect(() => {
    refetch();
  }, [params]);

  function handleMonthChange(type: 'increment' | 'decrement') {
    if(type === 'decrement' && params.month === 0) {
      setParams((prevState) => ({
        ...prevState,
        month: 11,
        year: prevState.year - 1
      }));
      return;
    };
    if(type === 'increment' && params.month === 11) {
      setParams((prevState) => ({
        ...prevState,
        month: 0,
        year: prevState.year + 1
      }));
      return;
    };

    setParams((prevState) => ({
      ...prevState,
      month: type === 'increment' ? prevState.month + 1 : prevState.month - 1
    }));
  }

  const {
    showAverageModal,
    handleCloseAverageModal
  } = useDashboard();

  const {
    average_per_month
  } = useDashboardGetAll();


  const labels = average_per_month.map((stat) => stat.game_date);
  const values = average_per_month.map((stat) => stat.total_score);

  // Get only day for the labels

  const monthlyValues = monthly.map((stat) => ({
    value: stat.total_score,
    dataPointText: stat.total_score,
    label: format(new Date(stat.game_date), `do`),
  }));

  const isLoading = isRefetching || isFetching;

  return {
    labels,
    values,
    showAverageModal,
    handleCloseAverageModal,
    monthlyValues,
    handleMonthChange,
    params,
    handleYearChange,
    average,
    total_games,
    isLoading
  }
}
