import React from "react";
import { useNavigate } from "react-router-dom";
import { UseWeatherAppContext } from "../../Context/Context";

function StateComponent({ stateName, dristric }) {
  const navigate = useNavigate();
  const {
    state: { city },
    dispatch,
  } = UseWeatherAppContext();
  const handleNavigation = () => {
    dispatch({
      type: "SET_CITY",
      payload: { ...dristric },
    });

    // navigate({
    //   pathname: `/details?name=${dristric.name}&lat=${dristric.lat}&long=${dristric.long}`,

    // });
    navigate("/details", {
      state: { name: dristric.name, lat: dristric.lat, long: dristric.lng },
    });
  };
  return (
    <button type="button" className="btn btn-info" onClick={handleNavigation}>
      {stateName}
    </button>
  );
}

export default StateComponent;
