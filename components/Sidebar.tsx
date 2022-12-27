import { MantineTheme } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import dayjs from "dayjs";
import { useState } from "react";
import EventModal from "./EventModal";

const Sidebar = () => {
  const [highlight, sethighlight] = useState<Date | null>(new Date());
  return (
    <>
      <aside
        style={{
          padding: "1.25rem",
          width: "16rem",
          borderWidth: "1px",
        }}
      >
        <div>
          <EventModal date={highlight}/>
         
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
            styles={(theme: MantineTheme) => ({
              day: { borderRadius: 100 },
            })}
          />
        </div>
        <div>LABEL</div>
      </aside>
    </>
  );
};
export default Sidebar;
