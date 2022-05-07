import { createSlice } from "@reduxjs/toolkit";

export const userSlice=
createSlice({
    name:'user',
    initialState:{
        useraddress:null,

      
    },
    reducers:{
        setUser:(state,action)=>{
            state.useraddress= action.payload;
            
        },
       
    },
});

export const {setUser} = userSlice.actions;
export const selectUserAddress =state=>state.user.useraddress;
export default userSlice.reducer;