import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "redux/filterSlice";
import { contactsApi } from 'redux/api'

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },

    middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactsApi.middleware],
});
