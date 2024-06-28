import { request } from "./request"

export const editTask = async (id, task) => {
    try {
        const response = await request.patch(`/tasks/${id}`, task);
        return response;
    } catch (err) {
        console.log(err);
    }
}