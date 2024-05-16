import React, { useState } from "react";
import { UseWeatherAppContext } from "../Context/Context";
import axios from "axios";

function useFetchWeather() {
  const {
    state: { city },
    dispatch,
  } = UseWeatherAppContext();
  // API VAR
  const APIKEY = "34480b98aa332da53123a0ac63a4ea9d";
  let lat = city && city.lat ? city.lat : "";
  let long = city && city.lng ? city.lng : "";
  let exclude = "hourly,minutely";
  const ULR = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${APIKEY}`;
  const [data, setData] = useState({});

  const fetchData = () => {
    if (!lat && !long) {
      alert("no lat and long present");
      return;
    }
    try {
      axios(ULR).then((data) => {
        let _daily = data.data.daily;
        dispatch({
          type: "SET_DAILY",
          payload: _daily,
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
  return { fetchData };
}

export default useFetchWeather;
