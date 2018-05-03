import * as actions from "./actions";

const initialState = {
  devices: {
    searchTerm: "",
    selectedFilter: "all",
    sortOrder: ["name", "ASC"]
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_SEARCH_TERM:
      return {
        ...state,
        devices: {
          ...state.devices,
          searchTerm: action.payload
        }
      };
    case actions.UPDATE_SELECTED_FILTER:
      return {
        ...state,
        devices: {
          ...state.devices,
          selectedFilter: action.payload
        }
      };
    case actions.UPDATE_SORT_ORDER:
      return {
        ...state,
        devices: {
          ...state.devices,
          sortOrder: action.payload
        }
      };
    default:
      return state;
  }
};
