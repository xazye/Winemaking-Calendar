import { createStyles, MantineTheme } from "@mantine/core";
export const useStyles = createStyles((theme: MantineTheme) => ({
  main: {
    display: "flex",
    flexDirection: "row",
  },
  cell: {
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },
  day: {
    borderRadius: 2,
    minHeight: "16vh",
    fontSize: theme.fontSizes.lg,
    // height: "auto",
    overflow: "hidden",
    display: "flex",
    alignItems: "flex-start",
    "&:hover": { overflowY: "scroll" },
  },
  weekday: {
    fontSize: theme.fontSizes.lg,
    display: "flex",
    flexDirection: "column-reverse",
  },
  weekdayCell: {
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      width: "100px",
    },
    fontSize: theme.fontSizes.xl,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[0],
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
    height: "70px",
  },
  calendarHeaderControl: {
    order: -1,
  },
}));
