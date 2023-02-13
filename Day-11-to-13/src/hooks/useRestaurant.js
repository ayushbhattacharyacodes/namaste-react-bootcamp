import { useEffect, useState } from "react";
import { DAPI_URL} from "../constants/constants";

function useRestaurant() {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const response = await fetch(DAPI_URL);
    const data = await response.json();
    setRestaurant(data?.data?.cards[2]?.data?.data?.cards);
  }
  return {allRestaurant:restaurant,filteredRestaurant:restaurant};
}

export default useRestaurant;
