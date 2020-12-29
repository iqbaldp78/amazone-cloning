import React, { createContext, useContext, useReducer } from "react";

//Prepared data layer
export const StateContext = createContext();

//wrap our app and provide to data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull the information from data layer
export const useStateValue = () => useContext(StateContext)