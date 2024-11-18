import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance.js";

const initialState = {
    courseData: []
}

export const getAllContacts = createAsyncThunk("/contact/get", async() => {
    try{
        const response = axiosInstance.get("/contact");
        toast.promise(response,{
            loading: "loading contact data ...",
            success: "contact loaded successfully",
            error: "Failed to get the contact",
        });

        return (await response).data.courses;
    }catch(error){
        toast.error(error?.response?.data?.message);
    }
});

export const createNewContact = createAsyncThunk("/register", async (data) => {
    try {
        let formData = new FormData();
        formData.append("firstName", data?.firstName);
        formData.append("lastName", data?.lastName);
        formData.append("email", data?.email);
        formData.append("phone", data?.phone);
        formData.append("company", data?.company);
        formData.append("jobTitle", data?.jobTitle);

        const response = axiosInstance.post("/contact", formData);
        toast.promise(response, {
            loading: "Creating new contact",
            success: "contact created successfully",
            error: "Failed to create contact"
        });

        return (await response).data

    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
});

const courseSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllContacts.fulfilled, (state, action)=> {
            if(action.payload){
                console.log(action.payload);
                state.courseData = [...action.payload];
            }
        })
    }
});

export default courseSlice.reducer;