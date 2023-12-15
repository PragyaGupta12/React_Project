const useRestaurant = (restroID) => {
  const [restaurant, setRestaurant] = useState(null);

  //API Call
  useEffect(() => {
    getRestroInfo();

    return () => {
      //this is unmounting in useEffect. This means as soon as we move from this component
      //any logic written here will be executed.
    };
  }, []);

  async function getRestroInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
        restroId
    );
    const json = await data.json();
    setRestaurant(json.data);
    // ?.data?.cards[0]?.card?.card?.info
  }
  // Return val
  return restaurant;
};

export default useRestaurant;
