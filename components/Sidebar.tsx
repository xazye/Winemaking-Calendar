import { MantineTheme } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import dayjs from "dayjs";
import { useState } from "react";

const Sidebar = () => {
  const [highlight, sethighlight] = useState<Date | null>(new Date());

  return (
    <div>
        <div>
            
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
      <div>
        LABEL
      </div>
    </div>
  );
};
export default Sidebar;
