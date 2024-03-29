import { 
  loginFailure, 
  loginStart, 
  loginSuccess } from "./userRedux";
import { 
  deleteProductStart,
  deleteProductSuccess, 
  deleteProductFailure,
} from  "./cartRedux";


import { publicRequest, userRequest } from "../requests/requestMethod";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/users/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};
