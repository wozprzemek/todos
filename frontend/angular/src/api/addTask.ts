import { Task } from "../types";
import { request } from "./request";

export const addTask = async (task: Task) => {
    const response = await request.post('/tasks', task);
    return response;
}