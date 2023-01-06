import dayjs from "dayjs";
import { useStyles } from "../styles/dayTile.style";

// add recipes interface later
// addd styling

const DayTile = ({ recipes, date }) => {
  const day = date.getDate();
  const { classes } = useStyles();

  return (
    <div className={classes.dayTile}>
      <span className={classes.day}>{day}</span>

      {recipes.map((recipe) => {
        let recipeDate = dayjs(recipe.created);
        if (recipeDate.isSame(date, "day")) {
          return (
            <span
              // fix overflow
              className={classes.dayRecipe}
              style={{
                backgroundColor: recipe.label,
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
