import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface UsernameSliceProps {
  value: string
}

const initialState: UsernameSliceProps = {
  value: ""
}

const UsernameSlice = createSlice({
    name: "username",
    initialState,
    reducers: {
        setUsernames: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }


})

export const { setUsernames } = UsernameSlice.actions
export default UsernameSlice.reducer