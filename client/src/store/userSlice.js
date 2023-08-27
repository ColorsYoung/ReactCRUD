import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'CHANCHAI CHAKAM',
  user: "Programer"
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.value = 'tam login'
      state.user = 'kkkkk'

    },
    logout: (state) => {
      state.value = 'tam loguot'
      state.user = 'ooooo'
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, incrementByAmount } = userSlice.actions

export default userSlice.reducer