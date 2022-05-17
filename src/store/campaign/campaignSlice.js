import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { campaign_api } from "../../utilrs/axiosInterceptors";
import { setFullFilled } from "../global/globalSlice";

const getCampaigns = createAsyncThunk(
    "campaign/getAll",
    async (_, { rejectWithValue }) => {
        const res = await campaign_api.get("/");
        if (res.status === 200) {
            return res.data;
        } else {
            rejectWithValue(res.data);
        }
    }
);
const getCampaignById = createAsyncThunk(
    "campaign/getById",
    async (id, { rejectWithValue }) => {
        const res = await campaign_api.get("/" + id);
        if (res.status === 200) {
            return res.data;
        } else {
            rejectWithValue(res.data);
        }
    }
);
const getCampaignOfCategory = createAsyncThunk(
    "campaign/",
    async (id, { rejectWithValue }) => {
        const res = await campaign_api.get("/category" + id);
        if (res.status === 200) {
            return res.data;
        } else {
            rejectWithValue(res.data);
        }
    }
);
const deleteCampaigns = createAsyncThunk(
    "campaign/delete",
    async (id, { rejectWithValue, dispatch }) => {
        let campaign_res = await campaign_api.delete("/" + id);
        if (campaign_res.status === 200) {
            dispatch(setFullFilled({ value: true }));
            return campaign_res.data;
        } else {
            rejectWithValue(campaign_res.data);
        }
    }
);

const postCampaign = createAsyncThunk(
    "campaign/post",
    async (data , { rejectWithValue, dispatch }) => {
        let campaign_res = await campaign_api.post("/", data);
        if (campaign_res.status === 200) {
            dispatch(setFullFilled({ value: true }));

            return campaign_res.data;
        } else {
            rejectWithValue(campaign_res.data);
        }
    }
);

const updateCampaign = createAsyncThunk(
    "category/update",
    async (data, { rejectWithValue, dispatch }) => {
        let campaign_res = await campaign_api.put("/" + data.id, data.data);
        if (campaign_res.status === 200) {
            dispatch(setFullFilled({ value: true }));
            return campaign_res.data;
        } else {
            rejectWithValue(campaign_res.data);
        }
    }
);

const initialState = {
    isLoading: false,
    campaigns: [],
    error: null,
};

const campaign= createSlice({
    name: "campaign",
    initialState,
    reducers: {},
    extraReducers: {
        [getCampaignOfCategory.fulfilled]: (state, action) => { },
        [getCampaignOfCategory.rejected]: (state, action) => {
            console.log("Campaigns err : ", action.payload);
        },
        [getCampaignById.fulfilled]: (state, action) => { },
        [getCampaignById.rejected]: (state, action) => {
            console.log("Campaigns err : ", action.payload);
        },
        [getCampaigns.fulfilled]: (state, action) => { },
        [getCampaigns.rejected]: (state, action) => {
            console.log("Campaigns err : ", action.payload);
        },
        [postCampaign.fulfilled]: (state, action) => { 
            window.location.reload();
        },
        [postCampaign.rejected]: (state, action) => {
            console.log("Campaigns err : ", action.payload);
        },
        [updateCampaign.fulfilled]: (state, action) => { },
        [updateCampaign.rejected]: (state, action) => {
            console.log("Campaigns err : ", action.payload);
        },
        [deleteCampaigns.fulfilled]: (state, action) => { },
        [deleteCampaigns.rejected]: (state, action) => {
            console.log("Campaigns err : ", action.payload);
        },
    },
});


export {
    getCampaignById,
    postCampaign,
    updateCampaign,
    deleteCampaigns,
    getCampaigns,
    getCampaignOfCategory
};
export default campaign.reducer;