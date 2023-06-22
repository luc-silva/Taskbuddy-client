import axios from "axios";
import { Service } from "./Service";

class UserService extends Service {
    public async get(id: number) {
        return await axios
            .get(`${this.base_url}user/${id}`)
            .then(({ data }) => {
                return data;
            });
    }

    public async login(data: ILoginForm): Promise<IUser> {
        return await axios
            .post(`${this.base_url}user/login`, data)
            .then(({ data }: { data: IUser }) => {
                return data;
            });
    }

    public async create(data: IRegisterForm): Promise<IMessageResponse> {
        return await axios
            .post(`${this.base_url}user/create`, data)
            .then(({ data }) => {
                return data;
            });
    }

    public async listUserProjects(id: number): Promise<IProject[]> {
        return await axios
            .get(`${this.base_url}user/${id}/projects`)
            .then(({ data }) => {
                return data;
            });
    }

    public async listUserTodos(id: number): Promise<ITodo[]> {
        return await axios
            .get(`${this.base_url}user/${id}/todo`)
            .then(({ data }) => {
                return data;
            });
    }
}

export default new UserService();
