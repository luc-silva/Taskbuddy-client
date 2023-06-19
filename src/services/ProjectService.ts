import axios from "axios";
import { Service } from "./Service";

class ProjectService extends Service {
    public constructor() {
        super();
    }

    public async get(id: number): Promise<IProject> {
        return await axios.get(`${this.base_url}/project/${id}`).then(({data}) => {
            return data;
        });
    }

    public async delete(id:number): Promise<IMessageResponse> {
        return await axios.delete(`${this.base_url}/project/${id}`).then(({data}) => {
            return data;
        })
    }

}

export default new ProjectService();
