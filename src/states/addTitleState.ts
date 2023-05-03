import { atom } from "recoil";
import { Task } from "../types/Task";
import { selector } from "recoil";

export const addTitleState = atom<Array<Task>>({
	key: "addTitleState",
	default: [],
});

export const addTitleStateLength = selector<number>({
	key: "addTItleStateLength",
	get: ({ get }) => {
		const addTitleNumber: Array<Task> = get(addTitleState);
		return addTitleNumber.length || 0;
	},
});
