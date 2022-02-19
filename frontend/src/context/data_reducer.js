const data_reducer = (state, action) => {
  switch (action.type) {
    case "LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "SERVICES_SUCCESS": {
      return {
        ...state,
        loading: false,
        services: action.payload,
      };
    }
    case "SERVICE_SUCCESS": {
      return {
        ...state,
        loading: false,
        singleService: action.payload,
      };
    }
    case "BUSINESS_SUCCESS": {
      return {
        ...state,
        loading: false,
        business: action.payload,
      };
    }
    case "CASESTUDY_SUCCESS": {
      return {
        ...state,
        loading: false,
        caseStudy: action.payload,
      };
    }
    case "SINGLE_BUSINESS_SUCCESS": {
      return {
        ...state,
        loading: false,
        singleBusiness: action.payload,
      };
    }
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default data_reducer;
