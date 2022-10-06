import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addUsers: localStorage.getItem("addUsersData")
    ? JSON.parse(localStorage.getItem("addUsersData"))
    : [],
  removeUsers: localStorage.getItem("removeUserData")
    ? JSON.parse(localStorage.getItem("removeUserData"))
    : [],
  editUserData: false,
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    addUser(state, action) {
      state.addUsers = [...state.addUsers, action.payload];
      localStorage.setItem("addUsersData", JSON.stringify(state.addUsers));
    },
    removeUser(state, action) {
      const removedUser = state.addUsers.filter(
        (user) => user.email !== action.payload.email
      );
      state.addUsers = removedUser;
      state.removeUsers = [...state.removeUsers, action.payload];
      localStorage.setItem("removeUserData", JSON.stringify(state.removeUsers));
    },
    reStoreUser(state, action) {
      const reStoreUserData = state.removeUsers.filter(
        (user) => user.email !== action.payload.email
      );
      state.addUsers = [...state.addUsers, action.payload];
      state.removeUsers = reStoreUserData;
      localStorage.setItem("addUsersData", JSON.stringify(state.addUsers));
      localStorage.setItem("removeUserData", JSON.stringify(state.removeUsers));
    },
    editUser(state, action) {
      const editUser = state.addUsers.findIndex(
        (item) => item.id === action.payload.id
      );
      if (editUser >= 0) {
        state.addUsers[editUser] = action.payload;
      } else {
        state.addUsers = [...state.addUsers, action.payload];
      }
      localStorage.setItem("addUsersData", JSON.stringify(state.addUsers));
    },
    editUserEmail(state, action) {
      state.editUserData = action.payload;
    },
    clearUserEmai(state) {
      state.editUserData = false;
    },
  },
});
export const {
  addUser,
  removeUser,
  reStoreUser,
  editUser,
  editUserEmail,
  clearUserEmai,
} = userSlice.actions;
export default userSlice.reducer;
