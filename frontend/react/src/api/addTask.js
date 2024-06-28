import { request } from "./request"

export const addTask = async (task) => {
    try {
        const response = await request.post('/tasks', task);
        return response;
    } catch (err) {
        console.log(err);
    }
}