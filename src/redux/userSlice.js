import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        users: null,
        userPhone: null,
        userEmail: null,
        userRole: '',
        userFirstName: '',
        userLastName: '',
        userId:'',
        fullName: '',
        myDate: null,
        show: false,
        showMenu: false,
    },
    reducers: {
        SetUser: (state, action) => {
            state.user = action.payload;
        },
        SetUserPhone: (state, action) => {
            state.userPhone = action.payload;
        },
        SetUserEmail: (state, action) => {
            state.userEmail = action.payload;
        },
        SetUserRole: (state, action) => {
            state.userRole = action.payload;
        },
        SetUsers: (state, action) => {
            state.users = action.payload;
        },
        SetUserId: (state, action) => {
            state.userId = action.payload;
        },
        SetFullName: (state, action) => {
            state.fullName = action.payload;
        },
        SetMyDate: (state, action) => {
            state.myDate = action.payload;
        },
        SetShow: (state, action) => {
            state.show = action.payload;
        },
        SetShowMenu: (state, action) => {
            state.showMenu = action.payload;
        },
    },
});

export const {SetUser, SetUserRole, SetUserEmail, SetUserPhone, SetUsers, SetUserId, SetFullName, SetMyDate, SetShow, SetShowMenu} = userSlice.actions;
export default userSlice.reducer;