import React, { useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
import LeftComponents from "../Left";
import WeekInfoCardComponents from "../WeekInfoCard";
import HumidityComponents from "../HUMIDITY";

// import { UseWeatherAppContext } from "../../Context/Context";
import useGetWeatherInfo from "../../hooks/useGetWeatherInfo";



function WhetherDetails() {
  const getweatherinfo = useGetWeatherInfo();
  // const [searchParams] = useSearchParams();
 

  // const selectedCity = {
  //   city: "Villupuram",
  //   lat: "11.9394",
  //   lng: "79.4883",
  //   country: "India",
  //   iso2: "IN",
  //   admin_name: "Villupuram",
  //   capital: "admin",
  //   population: "960000",
  //   population_proper: "240000",
  // };

 
  useEffect(() => {
    getweatherinfo();
  },[getweatherinfo]);
  // try {
  //   useEffect(() => {
  //     getweatherinfo();
  //   }, );
  // } catch (err) {
  //   console.log(err);
  // }

  // useEffect(() => {
  //   // //console.log('selectedCity', selectedCity);
  //   dispatch({
  //     type: "SET_CITY",
  //     payload: { ...selectedCity },
  //   });
  // }, []);

  // console.log(searchParams);
  return (
    <div className="homeWrap">
      <div className="weatherSection">
        <LeftComponents />
        <div className="rightSide">
          <WeekInfoCardComponents />
          <HumidityComponents />
        </div>
      </div>
    </div>
  );
}

export default WhetherDetails;











//  5b692784c8c84c2f46e5d826ed39b860


//   https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}