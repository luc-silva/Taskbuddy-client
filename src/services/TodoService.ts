import axios from "axios";
import { Service } from "./Service";

class TodoService extends Service {
    public async get(id: number): Promise<ITodo> {
        return await axios
            .get(`${this.base_url}todo/${id}`)
            .then(({ data }) => {
                return data;
            });
    }

    public async delete(id: number): Promise<IMessageResponse> {
        return await axios
            .delete(`${this.base_url}todo/${id}`)
            .then(({ data }) => {
                return data;
            });
    }

    public async create(id: number, data: ITodo): Promise<ITodo> {
        return await axios
            .post(`${this.base_url}todo/`, {...data, id:undefined ,user:{id}})
            .then(({ data }) => {
                return data;
            });
    }

    public async update(id: number, data: ITodo): Promise<ITodo> {
        return await axios
            .put(`${this.base_url}todo/${id}`, data)
            .then(({ data }) => {
                return data;
            });
    }
}

export default new TodoService();
