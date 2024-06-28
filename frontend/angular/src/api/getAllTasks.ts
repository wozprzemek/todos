import { request } from "./request";

export const getAllTasks = async () => {
    const response = await request.get('/tasks');
    return response;
}