import axios, { AxiosResponse } from "axios";
import { Service } from "./Service";

class ProjectService extends Service {
    public async get(id: number): Promise<IProject> {
        return await axios
            .get(`${this.base_url}project/${id}`)
            .then(({ data }: AxiosResponse) => {
                return data;
            });
    }

    public async delete(id: number): Promise<IMessageResponse> {
        return await axios
            .delete(`${this.base_url}project/${id}`)
            .then(({ data }: AxiosResponse) => {
                return data;
            });
    }

    public async create(data: IProject): Promise<IMessageResponse> {
        return await axios
            .post(`${this.base_url}project/`, data)
            .then(({ data }: AxiosResponse) => {
                return data;
            });
    }
}

export default new ProjectService();
