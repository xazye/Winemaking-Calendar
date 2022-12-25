import dayjs from "dayjs";
import { CSSProperties } from "react";


const dayy: CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    lineHeight: "1rem",
    height: "100%",
  };

// add recipes type later

const DayTile = ({recipes, date}) =>{
 const day = date.getDate();
 return (
    
   <div style={dayy}>
     <span >{day}</span>
     {(
       recipes.map((recipe) => {
         let recipeDate=dayjs(recipe.created)
         // this need a serioius fucking re do 
         // maaaaaan
         if(recipeDate.diff(date,"day",true)<0.09 && recipeDate.diff(date,"day",true)>0.00 )
         {return <span key={recipe.id}>{recipe.title}</span>;}
       })
     )}
   </div>
 );
}
export default DayTile