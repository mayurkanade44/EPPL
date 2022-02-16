import axios from "axios";
import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./data_reducer";

const DataContext = createContext();

const intialState = {
  loading: false,
  services: [],
  singleService: {},
  business: [],
  singleBusiness: {},
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const url = "/api/";

  const fetchServices = async () => {
    dispatch({ type: "LOADING" });
    try {
      const res = await axios.get(`${url}services`);
      dispatch({
        type: "SERVICES_SUCCESS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSingleService = async (id) => {
    dispatch({ type: "LOADING" });
    try {
      const res = await axios.get(`${url}single_service?id=${id}`);
      dispatch({
        type: "SERVICE_SUCCESS",
        payload: res.data.fields,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBusiness = async () => {
    dispatch({ type: "LOADING" });
    try {
      const res = await axios.get(`${url}business`);
      dispatch({
        type: "BUSINESS_SUCCESS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSingleBusiness = async (id) => {
    dispatch({ type: "LOADING" });
    try {
      const res = await axios.get(`${url}single_business?id=${id}`);
      dispatch({
        type: "SINGLE_BUSINESS_SUCCESS",
        payload: res.data.fields,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchServices();
    fetchBusiness();
    // eslint-disable-next-line
  }, []);

  return (
    <DataContext.Provider
      value={{ ...state, fetchSingleService, fetchSingleBusiness }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
