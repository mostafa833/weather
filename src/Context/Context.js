import React, {useReducer, useContext} from "react";

import { WeatherReducer } from "./Reducer";

const WeatherAppContext = React.createContext();

const WeatherAppProvider = ({children})=>{
    const [state, dispatch] = useReducer(WeatherReducer, {
        city:{
            "city": "Cairo", 
            "lat": "30.0444", 
            "lng": "31.2358", 
            "country": "Egypt", 
            "iso2": "EG", 
            "admin_name": "Al Qāhirah", 
            "capital": "primary", 
            "population": "20296000", 
            "population_proper": "9500000"
          },
        current:'',
        daily:''
    })

    return(
        <WeatherAppContext.Provider value={{state, dispatch}}>
            {children}
        </WeatherAppContext.Provider>
    )
}

export default WeatherAppProvider;

export const UseWeatherAppContext = ()=>{
    return useContext(WeatherAppContext);
}