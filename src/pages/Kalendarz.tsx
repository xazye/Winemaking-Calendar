import { Calendar } from "@mantine/dates";
import "dayjs/locale/pl";
import { useState, useEffect, CSSProperties } from "react";
const Kalendarz = () => {
  const [datum, setdatum] = useState<Date | null>(new Date());
  const [notes, setNotes] = useState<any[]>([]);
  const [isBusy, setBusy] = useState(true);

  useEffect(() => {
    console.log("dupa");
    getNotes();
  }, []);

  const dayy: CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    lineHeight: "1rem",
    height: "100%",
  };
  async function getNotes() {
    const response = await fetch("http://localhost:3004/notes");
    setBusy(false);
    setNotes(await response.json());
  }
  return (
    <div>
      <Calendar
        locale="pl"
        value={datum}
        onChange={(date) => {
          setdatum(date);
          console.log(date);
        }}
        renderDay={(date) => {
          const day = date.getDate();
          return (
            <div style={dayy}>
              <span className="day-class">{day}</span>
              {isBusy ? (
                <span>loading</span>
              ) : (
                notes.map((note) => {
                  if (note.created == date) {
                    return <span key={note.id}>{note.id}</span>;
                  }
                })
              )}
            </div>
          );
        }}
        fullWidth
        size="xl"
        styles={(theme) => ({
          cell: {
            border: `1px solid ${
              theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[2]
            }`,
          },
          day: {
            borderRadius: 2,
            height: "12vh",
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
