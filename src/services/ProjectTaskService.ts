import axios, { AxiosPromise } from "axios";
import { Service } from "./Service";

class ProjectTaskService extends Service {
    public constructor() {
        super();
    }
    public async get(id: number): Promise<IProjectTask> {
        return axios
            .get(`${this.base_url}project-task/${id}`)
            .then(({ data }) => {
                return data;
            });
    }

    public async update(id: number, data: IProjectTask) {
        return axios
            .put(`${this.base_url}project-task/${id}`, data)
            .then(({ data }) => {
                return data;
            });
    }
}

export default new ProjectTaskService();
