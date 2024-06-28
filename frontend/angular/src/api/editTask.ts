import { Task } from "../types";
import { request } from "./request";

export const editTask = async (id: string, task: Task) => {
    const response = await request.patch(`/tasks/${id}`, task);
    return response;
}