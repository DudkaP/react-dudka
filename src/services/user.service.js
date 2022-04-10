import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const userService = {
    getAll: () => axiosService.get(urls.users),
    getById: (id) => axiosService(`${urls.users}/${id}`),
    getPostById: (id) => axiosService(`${urls.users}/${id}/posts`)
}

