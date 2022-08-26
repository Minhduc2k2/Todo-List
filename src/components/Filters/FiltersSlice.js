//! Chia nhỏ rootReducer trong reducer
const initState = {
  search: "",
  status: "All",
  priority: [],
};

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/searchFiltersChange":
      return {
        ...state,
        search: action.payload,
      };
    case "filters/statusFiltersChange":
      return {
        ...state,
        status: action.payload,
      };
    case "filters/priorityFiltersChange":
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
