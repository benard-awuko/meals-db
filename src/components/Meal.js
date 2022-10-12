import React from "react";
import {Link} from 'react-router-dom';



let Meal = ({idMeal:id,strMeal:name,strArea:area, strMealThumb:image}   )=>{
      //  id:idMeal,name: strMeal, area:strArea,image:strMealThumb

return <article className="cocktail">
         <img src={image} alt={name}>

         </img>
         <div className="cocktail-footer">
            <h3>{name}</h3>
           
            <p>{area}</p>
   <Link to={`meal/${id}`} className="btn-primary btn-details">See Details</Link>

         </div>


</article>
}

export default Meal;