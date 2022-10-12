import React, {useCallback, useEffect, useState} from 'react';
import { useContext } from 'react';


let AppContent = React.createContext();

export let AppProvider =({children})=>{
    let [loading, setLoading] = useState(false);
    let [allMeals, setMeals] = useState([]);
    let [searchTerm, setSearchTerm] = useState('a');


    let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

    let fetchData = useCallback(      async()=>{
         setLoading(true);
    
        try {
             let response = await fetch(`${url}${searchTerm}`);
        let data = await response.json();
        let {meals} = data;
     
          if(meals){

        //    let newMeals =  meals.map((item)=>{
        //             let { idMeal,strMeal, strArea,strMealThumb} = item
        //     return {
        //         id:idMeal,name: strMeal, area:strArea,image:strMealThumb
        //     }

        //    })



              setMeals(meals); 
              
          }
          else {
               setMeals([])
          }
          setLoading(false)  
        } catch (error) {
            console.log(error);
             setLoading(false)  

        }
    },[searchTerm,url])

    useEffect(()=>{
        fetchData();
    },[searchTerm, fetchData])

     return <AppContent.Provider value={{allMeals, loading,setMeals, setSearchTerm}}>
             {children}
     </AppContent.Provider>
    
}

export let useGlobalContext = ()=>{

    return useContext(AppContent);
}