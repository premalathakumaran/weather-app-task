import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import LeftComponents from "../Left";
import WeekInfoCardComponents from "../WeekInfoCard";
import HumidityComponents from "../HUMIDITY";

import { UseWeatherAppContext } from "../../Context/Context";
import { useLocation } from "react-router-dom";
import axios from "axios";


function WhetherDetails() {
  const {state} = useLocation();
  const [searchParams] = useSearchParams();
  // const { fetchData } = useFetchWeather();
  const {
    // state: { city },
    dispatch,
  } = UseWeatherAppContext();

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

  const getweatherinfo = async () => {
    console.log(state,"state");
    const APIKEY = "34480b98aa332da53123a0ac63a4ea9d";
    let lat = state && state.lat ? state.lat : "";
    let long = state && state.long ? state.long : "";
    let exclude = "hourly,minutely";
    const ULR = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${APIKEY}`;
    const data = await axios.get(ULR)
    let _daily = data.data.daily;
    dispatch({
      type: "SET_DAILY",
      payload: _daily,
    });
    console.log(data)
  };
  try {
    useEffect(() => {
      getweatherinfo();
    }, );
  } catch (err) {
    console.log(err);
  }

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
