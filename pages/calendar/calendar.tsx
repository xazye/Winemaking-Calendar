import { Calendar } from "@mantine/dates";
import "dayjs/locale/pl";
import { useEffect, useState } from "react";
import DayTile from "../../components/DayTile";
import { MantineTheme } from "@mantine/core";
import Sidebar from "../../components/Sidebar";
import useSWR from "swr";

// make global swr config
// remeber about mutate
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Kalendarz = () => {
  const [datum, setdatum] = useState<Date | null>(new Date());

  // to do
  // change interval to mutate
  // implement isloading or don't
  const {
    data: recipes,
    error,
    isLoading,
  } = useSWR("/api/getrecipes", fetcher, { refreshInterval: 1000 });

  useEffect(() => {
    console.log(isLoading);
    console.log(recipes);
  }, []);

  //to implement
  //
  if (isLoading) return <div>loading...</div>;

  //
  //

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Sidebar />
      <Calendar
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
        styles={(theme: MantineTheme) => ({
          cell: {
            border: `1px solid ${
              theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[2]
            }`,
          },
          day: {
            borderRadius: 2,
            height: "16vh",
            fontSize: theme.fontSizes.lg,
            lineHeight: 0,
          },
          weekday: {
            fontSize: theme.fontSizes.lg,
            display: "flex",
            flexDirection: "column-reverse",
          },
          weekdayCell: {
            fontSize: theme.fontSizes.xl,
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[0],
            border: `1px solid ${
              theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[2]
            }`,
            height: 70,
          },
          // calendarHeader:{height:"vh"},
          calendarHeaderControl: { order: "-1" },
        })}
      />
    </div>
  );
};
export default Kalendarz;
