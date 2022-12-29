import dayjs from "dayjs";
import { CSSProperties } from "react";

const dayy: CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  lineHeight: "1rem",
  height: "100%",
};

// add recipes interface later
// addd styling

const DayTile = ({ recipes, date }) => {
  const day = date.getDate();
  return (
    <div style={dayy}>
      <span
        style={{
          padding: "10px",
          alignContent: "center",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {day}
      </span>
      {recipes.map((recipe) => {
        let recipeDate = dayjs(recipe.created);
        if (recipeDate.isSame(date, "day")) {
          return (
            <span
              // fix overflow
              style={{
                backgroundColor: recipe.label,
                alignContent: "center",
                margin: "0 auto",
                width: "80%",
                borderRadius: "10px",
                boxSizing: "border-box",
              }}
              key={recipe.id}
            >
              {recipe.title}
            </span>
          );
        }
      })}
    </div>
  );
};
export default DayTile;
