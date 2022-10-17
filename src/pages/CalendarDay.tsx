import { CSSProperties } from "react";
import { Link } from "react-router-dom";
interface poop {
  date: any;
  notes: any;
}

const CalendarDay = ({ date, notes }: poop) => {
  const dayy: CSSProperties = {
    display: "flex",
    alignItems: "center",
    // textAlign: "left",
    lineHeight: "1rem",
    height: "100%",
  };
  //   console.log(notes);
  const day = date.getDate();
  //need change from hard coded
  //   needs better styling
  const dayName = date.toLocaleString("pl", { weekday: "short" });
  return (
    <div style={dayy}>
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "50px",
          alignItems: "inherit",
          justifyContent: "center",
          borderRight: "2px solid black",
        }}
      >
        <span style={{ display: "block" }}>
          {day}
          <span style={{ display: "block" }}>{dayName}</span>
        </span>
      </div>
      <div className="task" style={{ flexGrow: "1" }}>
        {notes.map((note: any) => {
          // make it 3eq somehow, probly using lodash or smth
          if (note.created == date) {
            return (
              <Link to={`/note/${note.id}`}>
                <span key={note.id}>{note.id}</span>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};
export default CalendarDay;
