export const UPDATE_SEARCH_TERM = "UI/DEVICES/UPDATE_SEARCH_TERM";
export const UPDATE_SELECTED_FILTER = "UI/DEVICES/UPDATE_SELECTED_FILTER";
export const UPDATE_SORT_ORDER = "UI/DEVICES/UPDATE_SORT_ORDER";

export const updateSearchTerm = term => {
  return {
    type: UPDATE_SEARCH_TERM,
    payload: term
  };
};

export const updateSelectedFilter = status => {
  return {
    type: UPDATE_SELECTED_FILTER,
    payload: status
  };
};

export const updateSortOrder = (columnName, order) => {
  return {
    type: UPDATE_SORT_ORDER,
    payload: [columnName, order]
  };
};
