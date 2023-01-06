import { createStyles, MantineTheme } from "@mantine/core";
export const useStyles = createStyles((theme: MantineTheme) => ({
  dayTile: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "1rem",
    width: "inherit",
  },
  day: {
    borderBottom: "1px solid black",
    padding: "10px",
    width: "inherit",

    margin: "0 auto",
    boxSizing: "border-box",
  },
  dayRecipe: {
    alignContent: "center",
    margin: "0 auto",
    width: "80%",
    padding: "0px 10px 5px 10px",
    minWidth: "80px",
    maxHeight: "40px",
    minHeight: "20px",
    marginBottom: "5px",
    marginTop: "5px",
    borderRadius: "10px",
    boxSizing: "border-box",
    overflow: "hidden",
  },
}));
