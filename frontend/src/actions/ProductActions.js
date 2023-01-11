import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productContants";

export const listProducts = () => async (dispatch) => {
  try {
    await dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/products/");

    await dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (err) {
    await dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
export const listProductDetails = (id) => async (dispatch) => {
  try {
    await dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    await dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    console.log("caught err");
    await dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
