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
  caseStudy: [],
  products: [],
  singleProduct: {},
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

  const fetchProducts = async () => {
    dispatch({ type: "LOADING" });
    try {
      const res = await axios.get(`${url}products`);
      dispatch({
        type: "PRODUCTS_SUCCESS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSingleProduct = async (id) => {
    dispatch({ type: "LOADING" });
    try {
      const res = await axios.get(`${url}single_product?id=${id}`);
      dispatch({
        type: "PRODUCT_SUCCESS",
        payload: res.data.fields,
      });
    } catch (error) {
      console.log(error);
    }
  }

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

  const fetchCaseStudy = async () => {
    try {
      const res = await axios.get(`${url}casestudy`);
      dispatch({ type: "CASESTUDY_SUCCESS", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchServices();
    fetchBusiness();
    fetchProducts();
    fetchCaseStudy();
    // eslint-disable-next-line
  }, []);



  return (
    <DataContext.Provider
      value={{ ...state, fetchSingleService, fetchSingleBusiness, fetchSingleProduct }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
