import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";
import { Polish } from "flatpickr/dist/l10n/pl.js";

import { useState } from "react";
const Kalendarz = () => {
  const [datum, setdatum] = useState({ data: new Date() });

  return (
    <Flatpickr
      options={{
        altInput: true,
        inline: true,
        weekNumbers: true,
        locale: Polish,
      }}
      value={datum.data}
      onChange={([data]) => {
        setdatum({ data });
      }}
    />
  );
};
export default Kalendarz;
