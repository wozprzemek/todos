import { request } from "./request"

export const deleteTask = async (id) => {
    try {
        const response = await request.delete(`/tasks/${id}`);
        return response;
    } catch (err) {
        console.log(err);
    }
}