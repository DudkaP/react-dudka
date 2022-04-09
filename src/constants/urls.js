const baseURL = process.env.REACT_APP_API

const urls = {
    users: '/users',
    posts: '/posts?userId='
}

export default baseURL
export {urls}