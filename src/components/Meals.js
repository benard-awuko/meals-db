import React from 'react';
import {useGlobalContext} from '../context';
import Loading from './Loading';
import Meal from './Meal';

let Meals =()=> {

let { loading,allMeals} = useGlobalContext();

  if(loading){
    return <Loading></Loading>
    
  }

  if(allMeals.length < 1){
    
    return <h2 className='section-title'>No meal has been found. Kindly Search Again!</h2>
  }


return <section className='section meals-section'> 
  {/* <h2 className='section-title'> {`${meals.length > 1? 'Meals': 'Meal'}`}</h2> */}
<div className='cocktails-center'>
    
{allMeals.map((meal, index)=>{

                    return <Meal key={index} {...meal}></Meal>
                   })

                   }
                 
</div>
</section>
                  }

export default Meals;