import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const postService = {
    getAll: (page, _limit = 4) => axiosService.get(urls.posts, {
        params: {
            _start:(page-1)*_limit,
            _limit:_limit
        }
    }),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`)
}