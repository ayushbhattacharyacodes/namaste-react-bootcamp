import { useEffect, useState } from "react";
import { RES_ID } from "../constants/constants";

function useRestaurantMenu(resId) {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const response = await fetch(`${RES_ID}${resId}`);
    const data = await response.json();
    setRestaurant(Object.values(data?.data?.menu?.items));
  }
  console.log(restaurant);

  return restaurant;
}

export default useRestaurantMenu;
