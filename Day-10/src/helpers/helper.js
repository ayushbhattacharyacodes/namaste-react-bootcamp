export const filterRestaurant = (restaurants, inputValue) => {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    return filterData;
  };