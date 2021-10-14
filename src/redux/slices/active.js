import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActive(state, action) {
      state.isActive = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { setActive } = slice.actions;

// export function getUsers() {
//   return async (dispatch) => {
//     dispatch(slice.actions.startLoading());
//     try {
//       const response = await axios.get("/api/user/all");
//       dispatch(slice.actions.getUsersSuccess(response.data.users));
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//     }
//   };
// }
