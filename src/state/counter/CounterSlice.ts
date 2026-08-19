import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface CounterSliceProps {
  value: boolean
}

const initialState: CounterSliceProps = {
  value: false
}


const counterSlice = createSlice({
  name: 'counter',
  initialState, 
  reducers: {
    setValue: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
    setPositive: (state) => {
      state.value = true;
    },
    setNegative: (state) => {
      state.value = false;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(
        asyncCounterSlice.pending, () => {
            console.log("Value setting is pending")
        }
    )
    .addCase(
        asyncCounterSlice.fulfilled, (state, action) => {
            state.value = action.payload
            console.log("Value setting is complete")
        }
    )
  }
})

export const asyncCounterSlice = createAsyncThunk(
    "counterValueAsync", async(val: boolean) => {
        await new Promise<boolean>(
            (resolve) => setTimeout(resolve, 1000))
            return val;
    }
);

export const { setValue, setPositive, setNegative } = counterSlice.actions;
export default counterSlice.reducer;