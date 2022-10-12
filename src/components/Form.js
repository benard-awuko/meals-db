import React, {useRef,useEffect} from "react";
import { useGlobalContext } from "../context";





let Form = ()=>{
         let {setSearchTerm} = useGlobalContext();
let searchValue = useRef(null);

let formHandler =(e)=>{
    e.preventDefault();
}

let searchHandler = ()=>{
setSearchTerm(searchValue.current.value);
}

useEffect(()=>{
    searchValue.current.focus();
},[])

return <section className="section search form-section">
         <form className="search-form" onSubmit={formHandler}>
            <div className="form-control">
                <label htmlFor="name">Search for a meal</label>
                <input type='text' id="name" ref={searchValue}  onChange={searchHandler}></input>
            </div>


         </form>


    </section>
}

export default Form;