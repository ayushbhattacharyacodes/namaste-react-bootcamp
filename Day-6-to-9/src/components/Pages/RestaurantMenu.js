 import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RES_ID } from "../../constants/constants";
 
 const RestaurantMenu = () =>{
    const params = useParams();
    const { id } = params;
    console.log(`${RES_ID}${id}`);

    async function getRestaurantsMenu(){
        const response = await fetch(`${RES_ID}${id}`)
        const data = await response.json();
        console.log(data?.data?.menu)
    } 

    useEffect(()=>{
        getRestaurantsMenu()
    },[])
 }

 export default RestaurantMenu;