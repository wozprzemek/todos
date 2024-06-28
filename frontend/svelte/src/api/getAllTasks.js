import { request } from "./request"

export const getAllTasks = async () => {
    try {
        const response = await request.get('/tasks');
        return response;
    } catch (err) {
        console.log(err);
    }
}