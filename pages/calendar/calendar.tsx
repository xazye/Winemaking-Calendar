import { Calendar } from "@mantine/dates";
import "dayjs/locale/pl";
import { useState } from "react";
import DayTile from "../../components/DayTile";
import Sidebar from "../../components/Sidebar";
import useSWR from "swr";
import { useStyles } from "../../styles/calendar.style";

// make global swr config
// remeber about mutate

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init);
  return res.json();
};

const Kalendarz = () => {
  const [datum, setdatum] = useState<Date | null>(new Date());
  const { classes } = useStyles();

  // to do
  // change interval to mutate
  // implement isloading or don't
  const {
    data: recipes,
    error,
    isLoading,
  } = useSWR("/api/getrecipes", fetcher, { refreshInterval: 1000 });

  //to implement
  //
  if (isLoading) return <div>loading...</div>;

  //
  //

  return (
    <main className={classes.main}>
      <Sidebar />
      <Calendar
        classNames={{
          cell: classes.cell,
          day: classes.day,
          weekday: classes.weekday,
          weekdayCell: classes.weekdayCell,
          calendarHeaderControl: classes.calendarHeaderControl,
        }}
        locale="pl"
        allowLevelChange={false}
        value={datum}
        onChange={(date) => {
          setdatum(date);
        }}
        renderDay={(date: { getDate() }) => {
          return <DayTile recipes={recipes} date={date} />;
        }}
        fullWidth
        size="xl"
      />
    </main>
  );
};

export default Kalendarz;
