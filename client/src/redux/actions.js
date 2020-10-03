import API from "../api/api";
import { FETCH_ITEMS } from "./types";

export const addItem = (item) => {
  return async (dispatch) => {
    await API.addItem(item);
    dispatcFetchItems(dispatch);
  };
};

export const updateItem = (item) => {
  return async (dispatch) => {
    await API.updateItem(item);
    dispatcFetchItems(dispatch);
  };
};

export const deleteItem = (item) => {
  return async (dispatch) => {
    await API.deleteItem(item);
    dispatcFetchItems(dispatch);
  };
};

export const getItems = () => {
  return async (dispatch) => {
    dispatcFetchItems(dispatch);
  };
};

const dispatcFetchItems = async (dispatch) => {
  const items = await API.getItems();
  dispatch({
    type: FETCH_ITEMS,
    payload: items,
  });
};
