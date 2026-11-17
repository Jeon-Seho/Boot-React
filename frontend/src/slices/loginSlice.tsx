import { createSlice } from "@reduxjs/toolkit"

export interface LoginInfo {
    email:string,
    nickname:string,
    accessToken: string,
    refreshToken: string,
    roleNames: string[],
    status: string
}

const initState:LoginInfo = {
    email: '',
    nickname: '',
    accessToken:'',
    refreshToken: '',
    roleNames: [],
    status: ''
}

export const loginPostAsync = createAsyncThunk('loginPostAsync', ({email, pw}: {email:string, pw:string}) =>{
    console.log("---------------loginPostAsync---------------------")
    console.log(email, pw)
    return loginPost(email, pw)
})

const loginSlice = createSlice( {
    name: 'LoginSlice',
    initialState: initState,
    reducers: {
        logout: (state, action) =>{
            console.log("logout")

            return {...initState}
        }
    },
    extraReducers: (builder) =>{
        builder.addCase( loginPostAsync.fulfilled, (state, action) => {
            console.log("fulfilled")
            const newState = {...action.payload}
            console.log("payload", action.payload)
            newState.status = 'fulfilled'
            return newState
        })
        .addCase(loginPostAsync.pending, (state,action) => {
            console.log("pending")
            state.status = 'pending'
        })
        .addCase(loginPostAsync.rejected, (state,action) =>{
            console.log("rejected")
            state.status = 'rejected'
        })
    }
})

export const {logout} = loginSlice.actions

export default loginSlice.reducer
