import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tasksApi } from "../api/tasksApi.js";

export const fetchTasks = createAsyncThunk("tasks/fetch", async () => {
  return await tasksApi.getAll();
});

export const addTask = createAsyncThunk("tasks/add", async (text) => {
  return await tasksApi.create(text);
});

export const toggleTask = createAsyncThunk("tasks/toggle", async ({ id, completed }) => {
  return await tasksApi.update(id, { completed });
});

export const deleteTask = createAsyncThunk("tasks/delete", async (id) => {
  await tasksApi.remove(id);
  return id;
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder      
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload || [];
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error?.message || "Ошибка загрузки";
      })
      
      .addCase(addTask.fulfilled, (state, action) => {
        if (action.payload) state.items.unshift(action.payload);
      })
      
      .addCase(toggleTask.fulfilled, (state, action) => {
        const updated = action.payload;
        if (!updated) return;
        const idx = state.items.findIndex((t) => t.id === updated.id);
        if (idx !== -1) state.items[idx] = updated;
      })
      
      .addCase(deleteTask.fulfilled, (state, action) => {
        const id = action.payload;
        state.items = state.items.filter((t) => t.id !== id);
      });
  },
});

export default tasksSlice.reducer;