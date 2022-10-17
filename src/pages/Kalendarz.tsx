import { Calendar } from "@mantine/dates";
import "dayjs/locale/pl";
import { useState, useEffect, CSSProperties, useRef } from "react";
import CalendarDay from "./CalendarDay";
const Kalendarz = () => {
  const [datum, setdatum] = useState<Date | null>(new Date());
  const [notes, setNotes] = useState<any[]>([]);
  const [isBusy, setBusy] = useState(true);
  // maybe change it from any
  const currentSelected: any = useRef(0);

  useEffect(() => {
    getNotes();
    currentSelected.current = document.querySelector('[data-selected="true"]');
    currentSelected.current.focus();
  }, []);

  useEffect(() => {
    currentSelected.current = document.querySelector('[data-selected="true"]');
  }, [datum]);

  async function getNotes() {
    const response = await fetch("http://localhost:3004/notes");
    setBusy(false);
    setNotes(await response.json());
  }

  return (
    // add theme changer button
    // add left siwpe, right swipe change months
    <div>
      <Calendar
        locale="pl"
        value={datum}
        //display weekdays when above some size
        hideWeekdays={true}
        labelFormat="MM/YYYY"
        onChange={(date) => {
          setdatum(date);
        }}
        renderDay={(date) => {
          return isBusy ? (
            <span>loading</span>
          ) : (
            // figure out what i want to pass
            // idea now: pass only tasks for this month
            // and it will check where to put these tasks
            // THINK ABOUT MAYBE DATE RANGE FOR FUTURE

            // will need to pass locale
            // probly pass if busy, the whole thing turns into loading,
            // instead of only tasks

            // prolly make CalendarDAymobile and CalendarDAy
            // so you won't have to fuck with styling too much
            <CalendarDay date={date} notes={notes} />
          );
        }}
        onMonthChange={(date) => {
          // think about this solution
          // it's not 100% working
          // if i pick date from year/month picker
          // it changes date to 1st of that month, so the eq false
          // i need to rework it
          date.toDateString() === new Date().toDateString()
            ? currentSelected.current.focus()
            : window.scroll(0, 0);
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
