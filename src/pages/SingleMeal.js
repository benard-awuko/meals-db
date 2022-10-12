import React,{useCallback, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import Loading from '../components/Loading'
import {Link} from 'react-router-dom'
let url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

let SingleMeal = ()=>{
  let [loading, setLoading] = useState(false);
  let [meal, setMeal] = useState(null);
  let {id} = useParams();

  let fetchData =  useCallback(  async()=>{
     setLoading(true);
     
     try {
    let response = await fetch(`${url}${id}`);
    let data = await response.json();
           
           let {meals} = data;
          
          let singleMeal = meals[0]
          


      if (singleMeal){
        let {strMeal:name1, strMealThumb:image,strInstructions: instructions, strCategory:category, strIngredient1,strIngredient2,strIngredient3, strIngredient4, strIngredient5
} = singleMeal;
  let ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5
]

let newMeal ={name1, image, instructions,category,ingredients}
setMeal(newMeal);

      }
      else{
        setMeal(null)
      }
     
      setLoading(false)
     } catch (error) {
      console.log(error);
      setLoading(false)
     }


  }, [id])

useEffect(()=>{
   fetchData();
},[id, fetchData])


  if(loading){
    return <Loading></Loading>
  }
 
  if(!meal){
    return <h2>There there is no meal to display</h2>
  }

  let {name1, image, instructions,category,ingredients} = meal;

  return <section className='section cocktail-section'>
      <Link to="/" className='btn btn-primary'>Back To Home</Link>
      <h2 className='section-title'>{name1}</h2>
      <div className='drink'>
        <img src={image} alt={name1}></img>
        <div className='drink-info'>
           
            <p>
               <span className='drink-data'>Category</span>
                   {category}
           </p>
           <p>
               <span className='drink-data'>Instructions</span>
                   {instructions}
           </p>
            <p>
               <span className='drink-data'>Ingredients</span>
                   {ingredients.map((item, index)=>{
                         return item? <span key={index}>{item}</span>  : null;

                   })}
           </p>
            


        </div>


      </div>


    </section>

}

export default SingleMeal;