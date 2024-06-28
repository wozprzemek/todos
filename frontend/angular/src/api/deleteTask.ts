import { request } from "./request";

export const deleteTask = async (id: string) => {
    const response = await request.delete(`/tasks/${id}`);
    return response;
}