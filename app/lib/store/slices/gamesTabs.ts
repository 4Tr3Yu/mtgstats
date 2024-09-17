import { createSlice } from "@reduxjs/toolkit";
export interface GameTabs {
	activeGame: string;
	games: Array;
}

export const gameTabsSlice = createSlice({
	name: "gametabs",
	initialState: ["game 1"],
	reducers: {},
});
