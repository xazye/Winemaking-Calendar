import { createStyles, MantineTheme } from '@mantine/core';
export const useStyles = createStyles((theme:MantineTheme) => ({
dayTile:{
      display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  lineHeight: "1rem",
  height: "100%",
},
day:{
     padding: "10px",
          alignContent: "center",
          margin: "0 auto",
          boxSizing: "border-box",
},
dayRecipe:{
                alignContent: "center",
                margin: "0 auto",
                width: "80%",
                borderRadius: "10px",
                boxSizing: "border-box",
}
}))