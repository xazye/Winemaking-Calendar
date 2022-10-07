import { Calendar } from "@mantine/dates";
import "dayjs/locale/pl";
import { useState } from "react";
const Kalendarz = () => {
  const [datum, setdatum] = useState<Date | null>(new Date());
  return (
    <div>
      <Calendar
        locale="pl"
        value={datum}
        onChange={(date) => {
          setdatum(date);
          console.log(date);
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

            "&": {
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              lineHeight: "1rem",
              "&": { alignItems: "center" },
            },
          },
          weekday: { fontSize: theme.fontSizes.lg },
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
