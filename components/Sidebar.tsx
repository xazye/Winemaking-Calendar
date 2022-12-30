import { MantineTheme } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import dayjs from "dayjs";
import { useState } from "react";
import EventModal from "./EventModal";
import { useStyles } from "../styles/sidebar.style";

const Sidebar = () => {
  const [highlight, sethighlight] = useState<Date | null>(new Date());
  const { classes } = useStyles();
  return (
    <>
      <aside className={classes.aside}>
        <div>
          <EventModal date={highlight} />
        </div>
        <div>
          <Calendar
            value={new Date()}
            locale="pl"
            allowLevelChange={false}
            size="xs"
            onChange={(date) => {
              sethighlight(date);
            }}
            dayStyle={(date) => {
              if (dayjs(date).isSame(highlight, "day")) {
                return { backgroundColor: "black" };
              }
            }}
            classNames={{ day: classes.day }}
          />
        </div>
        <div>LABEL</div>
      </aside>
    </>
  );
};
export default Sidebar;
