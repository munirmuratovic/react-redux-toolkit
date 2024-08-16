import { createAsyncThunk } from "@reduxjs/toolkit";

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return amount;
  }
);
