import React, { useState } from "react";
// import states from "../../Data/in.json";

// import axios from "axios";

import { UseWeatherAppContext } from "../../Context/Context";
import StateComponent from "../statelist/StateComponent";


const ChooseStateComponents = () => {
  const {
    state: { city },
    dispatch,
  } = UseWeatherAppContext();
  const [districts, setDristricts] = useState([]);

  const states = [
    { name: "Select State", districts: [] },
    {
      name: "tamilnadu",
      district: [
        {
          name: "villupuram",

          city: "Villupuram",
          lat: "11.9394",
          lng: "79.4883",
          country: "India",
          iso2: "IN",
          admin_name: "Villupuram",
          capital: "admin",
          population: "960000",
          population_proper: "240000",
        },
        {
          name: "maduri",
          city: "Madurai",
          lat: "9.9252",
          lng: "78.1198",
          country: "India",
          iso2: "IN",
          admin_name: "Tamil Nadu",
          capital: "minor",
          population: "1463215",
          population_proper: "1463215",
        },
        {
          name: "chennai",
          city: "Chennai",
          lat: "13.0827",
          lng: "80.2707",
          country: "India",
          iso2: "IN",
          admin_name: "Tamil Nadu",
          capital: "primary",
          population: "8696010",
          population_proper: "8696010",
        },
      ],
    },
    {
      name: "kerala",
      district: [
        {
          name: "kochi",
          city: "Kochi",
          lat: "9.9399",
          lng: "76.2602",
          country: "India",
          iso2: "IN",
          admin_name: "Kerala",
          capital: "minor",
          population: "601574",
          population_proper: "601574",
        },
        {
          name: "munar",
          city: "Munnar",
          lat: "10.0889",
          lng: "77.0595",
          country: "India",
          iso2: "IN",
          admin_name: "Kerala",
          capital: "minor",
          population: "8845",
          population_proper: "8845",
        },
        {
          name: "trivandrum",
          city: "Thiruvananthapuram",
          lat: "8.5241",
          lng: "76.9366",
          country: "India",
          iso2: "IN",
          admin_name: "Kerala",
          capital: "primary",
          population: "957730",
          population_proper: "957730",
        },
      ],
    },
  ];

  const handleChange = (e) => {
    if (e.target.value !== "Select State") {
      const districtList = states.filter((item) => {
        if (item.name === e.target.value) {
          return item.district;
        }
      })[0].district;
      console.log("districtList", districtList);
      setDristricts(districtList);
      // debugger;
      const selectedCity = districtList.filter(
        (city) => city.city === e.target.value
      )[0];
      // debugger;

      // //console.log('selectedCity', selectedCity);
      dispatch({
        type: "SET_CITY",
        payload: { ...selectedCity },
      });
    }
  };

  // API VAR
  const APIKEY = "34480b98aa332da53123a0ac63a4ea9d";
  let lat = city && city.lat ? city.lat : "";
  let long = city && city.lng ? city.lng : "";
  let exclude = "hourly,minutely";
  const ULR = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${APIKEY}npm`;

  // const { fetchData } = useFetchWeather();

  // useEffect(() => {
  //   fetchData();
  //   // eslint-disable-next-line
  // }, [city]);

  return (
    <>
      <div className="stateWrap">
        <select
          className="stateMenus"
          defaultValue={states}
          onChange={handleChange}
        >
          {states &&
            states.length > 0 &&
            states.map((state) => {
              return (
                <option
                  key={`${states.population}${states.lat}`}
                  value={states.tamilnadu}
                >
                  {state.name}
                </option>
              );
            })}
        </select>
      </div>
      {districts && districts.length > 0 && (
        <div className="stateWrap">
          {districts.map((dristric) => (
            <StateComponent
              key={dristric.name}
              stateName={dristric.name}
              dristric={dristric}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ChooseStateComponents;
