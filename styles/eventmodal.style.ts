import { createStyles, MantineTheme } from '@mantine/core';
export const useStyles = createStyles((theme:MantineTheme) => ({
  header: {
            height: 0,
            margin: 0,
          },
          form:{
             display: "grid",
            gridTemplateColumns: "40px auto",
            gridTemplateRows: "50px 50px 50px auto ",
          },
          input:{
              paddingBottom: "0.5rem",
              paddingTop: "0.75rem",
              color: "#4B5563",
              width: "100%",
              borderWidth: "0",
              borderBottomWidth: "2px",
              borderColor: "#E5E7EB",
              outline: "none",
            }
}))