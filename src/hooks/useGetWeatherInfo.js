import axios from "axios";
import { useLocation } from "react-router-dom";
import { UseWeatherAppContext } from "../Context/Context";

function useGetWeatherInfo() {
  const { state } = useLocation();
  const {
    // state: { city },
    dispatch,
  } = UseWeatherAppContext();
  const getweatherinfo = async () => {
    console.log(state, "state");
    const APIKEY = "34480b98aa332da53123a0ac63a4ea9d";
    let lat = state && state.lat ? state.lat : "";
    let long = state && state.long ? state.long : "";
    let exclude = "hourly,minutely";
    const ULR = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${APIKEY}`;
    const data = await axios.get(ULR);
    let _daily = data.data.daily;
    dispatch({
      type: "SET_DAILY",
      payload: _daily,
    });
    console.log(data);
  };
  return getweatherinfo;
}

export default useGetWeatherInfo;
