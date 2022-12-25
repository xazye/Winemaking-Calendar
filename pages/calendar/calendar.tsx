import { Calendar } from "@mantine/dates";
import "dayjs/locale/pl";
import { useState} from "react";
import prisma from "../../lib/prisma";
import { GetStaticProps} from "next"
import DayTile from "../../components/DayTile";

export const getStaticProps: GetStaticProps = async () => {
  const recipes = await prisma.recipe.findMany()
  return {
    props: { recipes },
    revalidate: 10,
  };
};



const Kalendarz = ({recipes}) => {
    const [datum, setdatum] = useState<Date | null>(new Date());
    
    return (
      <div>
        <Calendar
          locale="pl"
          allowLevelChange={false}
          value={datum}
          onChange={(date) => {
            setdatum(date);
          }}
          renderDay={(date: { getDate()}) => {
            return(<DayTile recipes={recipes} date={date}/>
            )
          ;}}
          fullWidth
          size="xl"
          styles={(theme: { colorScheme: string; colors: { dark: any[]; gray: any[]; }; fontSizes: { lg: any; xl: any; }; }) => ({
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