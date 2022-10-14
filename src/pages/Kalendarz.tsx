import { Calendar } from "@mantine/dates";
import { useScrollIntoView } from "@mantine/hooks";
import "dayjs/locale/pl";
import { useState, useEffect, CSSProperties } from "react";
import CalendarDay from "./CalendarDay";
const Kalendarz = () => {
  const [datum, setdatum] = useState<Date | null>(new Date());
  const [notes, setNotes] = useState<any[]>([]);
  const [isBusy, setBusy] = useState(true);

  useEffect(() => {
    getNotes();
    document.querySelector('[data-selected="true"]')?.scrollIntoView(false);
  }, []);
  useEffect(() => {
    document.querySelector('[data-selected="true"]')?.scrollIntoView(false);
  }, [datum]);

  async function getNotes() {
    const response = await fetch("http://localhost:3004/notes");
    setBusy(false);
    setNotes(await response.json());
  }

  return (
    <div>
      <Calendar
        // date needs to be only day month year for simplicity
        locale="pl"
        value={datum}
        //display weekdays when above some size
        hideWeekdays={true}
        labelFormat="MM/YYYY"
        onChange={(date) => {
          setdatum(date);
          console.log(date);
        }}
        renderDay={(date) => {
          return isBusy ? (
            <span>loading</span>
          ) : (
            // figure out what i want to pass
            // idea now: pass only tasks for this month
            // and it will check where to put these tasks
            // THINK ABOUT MAYBE DATE RANGE FOR FUTURE

            // will need to pass locale for if mobile fuuuck

            // prolly make CalendarDAymobile and CalendarDAy
            // so you won't have to fuck with styling too much
            <CalendarDay date={date} notes={notes} />
          );
        }}
        onMonthChange={(date) => {
          // make this scroll to top when changing months
          // but scroll to today when on right month
          //! Problem, this is called when leaving month
          //  problem solved
          //! Problem, won't scroll with data-selected="true",
          // if only i could set id on selected button
          // window.scroll(0, 0);
          console.log(date.toDateString());
          console.log(new Date().toDateString());
          console.log(date.toDateString() === new Date().toDateString());
          date.toDateString() === new Date().toDateString()
            ? console.log(document.querySelector('[data-selected="true"]'))
            : window.scroll(0, 0);

          // console.log(document.querySelector('[data-selected="true"]'));
        }}
        fullWidth
        styles={(theme) => ({
          calendarHeader: {
            // position: "-webkit-sticky",
            position: "sticky",
            zIndex: 1,
            top: "0",
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[0],
          },
          cell: {
            display: "flex",
            flexDirection: "column",
            borderTop: `1px  solid
            ${
              theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[2]
            }`,
          },
          day: {
            borderRadius: 2,
            height: "13vh",
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
        })}
      />
    </div>
  );
};
export default Kalendarz;
