import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/users";

interface UsersState {
  editingUser: User | null;
}

const initialState: UsersState = {
  editingUser: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setEditingUser(state, action: PayloadAction<User | null>) {
      state.editingUser = action.payload;
    },
  },
});

export const { setEditingUser } = usersSlice.actions;
export default usersSlice.reducer;
