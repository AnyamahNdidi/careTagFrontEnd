import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    toggle:true
}

const GlobalRedux = createSlice({
  name: "second",
  initialState,
    reducers: {
      
        createUser: (state, {payload}) =>
        {
            state.user = payload;
        },
      
        signOut: (state) => {
		         state.user = null;
		   },
        
  }
});

export const {createUser,signOut} = GlobalRedux.actions

export default GlobalRedux.reducer