import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
    value: Customer[]
}

interface Customer {
    id: string;
    name: string;
    food: string[]
}

const initialState: CustomerState = {
    value : []
}

export const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {}
});

export const {  } = customerSlice.actions

export default customerSlice.reducer