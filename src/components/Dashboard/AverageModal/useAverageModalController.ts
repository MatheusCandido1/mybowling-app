import { useEffect, useState } from "react";
import { useDashboard } from "../../../hooks/useDashboard";
import { useDashboardGetAll } from "../../../hooks/useDashboardGetAll";
import { useDashboardMonthly } from "../../../hooks/useDashboardMonthly";
import { MonthlyInterface } from "../../../services/dashboardService/monthly";
import { format, getISOWeek } from 'date-fns';
import { useDashboardWeekly } from "../../../hooks/useDashboardWeekly";
import { WeeklyInterface } from "../../../services/dashboardService/weekly";
import moment from "moment";
import { YearlyInterface } from "../../../services/dashboardService/yearly";
import { useDashboardYearly } from "../../../hooks/useDashboardYearly";

export function useAverageModalController() {
  const [params, setParams] = useState<MonthlyInterface>({
    year: new Date().getFullYear(),
    month: new Date().getMonth()
  });

  const [week, setWeek] = useState<WeeklyInterface>({
    week: getISOWeek(new Date())
  });

  const [currentYear, setCurrentYear] = useState<YearlyInterface>({
    year: new Date().getFullYear()
  });

  const [begginingOfWeek, setBegginingOfWeek] = useState<String>();
  const [endOfWeek, setEndOfWeek] = useState<String>();

  useEffect(() => {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const daysToAdd = (week.week - 1) * 7;
    const firstDayOfWeek = new Date(firstDayOfYear.setDate(firstDayOfYear.getDate() + daysToAdd));

    const beginningOfWeekDate = new Date(firstDayOfWeek);
    const endOfWeekDate = new Date(firstDayOfWeek);
    endOfWeekDate.setDate(firstDayOfWeek.getDate() + 6);

    setBegginingOfWeek(format(beginningOfWeekDate, 'LL/dd')); // Adjust the date format as needed
    setEndOfWeek(format(endOfWeekDate, 'LL/dd')); // Adjust the date format as needed
  }, [week, setWeek]);

  const [type, setType] = useState<'weekly' | 'monthly' | 'yearly'>('monthly');

  function handleTypeChange(type: 'weekly' | 'monthly' | 'yearly') {
    refetchAll();
    setType(type);
  }

  function refetchAll() {
    refetch();
    refetchWeekly();
    refetchYearly();
  }

  const {
    monthly,
    average,
    total_games,
    refetch,
    isRefetching,
    isFetching
  } = useDashboardMonthly(params)

  const {
    weekly,
    weekAverage,
    weekTotalGames,
    isFetchingWeekly,
    isRefetchingWeekly,
    refetchWeekly,
  } = useDashboardWeekly(week);

  const {
    yearly,
    isFetchingYearly,
    isRefetchingYearly,
    refetchYearly,
    yearAverage,
    yearTotalGames
  } = useDashboardYearly(currentYear);

  useEffect(() => {
    refetchYearly();
  }, [currentYear]);


  useEffect(() => {
    refetchWeekly();
  }, [week]);

  function handleWeekChange(type: 'increment' | 'decrement') {
    setWeek((prevState) => {
      let newWeek;

      if (type === 'increment') {
        newWeek = prevState.week + 1 > 52 ? 1 : prevState.week + 1;
      } else {
        newWeek = prevState.week - 1 < 1 ? 52 : prevState.week - 1;
      }

      return {
        ...prevState,
        week: newWeek
      };
    });
  }

  function handleYearChange(type: 'increment' | 'decrement') {
    setParams((prevState) => ({
      ...prevState,
      year: type === 'increment' ? prevState.year + 1 : prevState.year - 1
    }));
  }

  function handleCurrentYearChange(type: 'increment' | 'decrement') {
    setCurrentYear((prevState) => ({
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
    label: moment(stat.game_date).format('Do'),
  }));

  const weeklyValues = weekly.map((stat) => ({
    value: stat.total_score,
    dataPointText: stat.total_score,
    label: moment(stat.game_date).format('Do'),
  }));

  const yearlyValues = yearly.map((stat) => ({
    value: stat.average_score,
    dataPointText: stat.average_score,
    label: moment(stat.month, 'M').format('MMM'),
  }));


  const isLoading = isRefetching || isFetching;

  const isLoadingWeekly = isRefetchingWeekly || isFetchingWeekly;

  const isLoadingYearly = isRefetchingYearly || isFetchingYearly;


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
    isLoading,
    type,
    handleTypeChange,
    week,
    handleWeekChange,
    begginingOfWeek,
    endOfWeek,
    weekly,
    weekAverage,
    weekTotalGames,
    isLoadingWeekly,
    weeklyValues,
    currentYear,
    handleCurrentYearChange,
    yearlyValues,
    isLoadingYearly,
    yearAverage,
    yearTotalGames
  }
}
