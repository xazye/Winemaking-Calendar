import { createStyles, MantineTheme } from '@mantine/core';
export const useStyles = createStyles((theme:MantineTheme) => ({
  main:{ 
    display: "flex",
    flexDirection: "row"
  },
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
  }, weekday: {
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
  calendarHeaderControl: {
            order: -1,
          },
}))