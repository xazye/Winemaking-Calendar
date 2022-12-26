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
        //  old code to admire my creativity
        // and inability to work with provided tools
        //  if(recipeDate.diff(date,"day",true)<0.09 && recipeDate.diff(date,"day",true)>0.00 )
        if(recipeDate.isSame(date,"day") )
         {return <span key={recipe.id}>{recipe.title}</span>;}
       })
     )}
   </div>
 );
}
export default DayTile