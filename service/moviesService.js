import request from './request';

/**
 * 获取电影列表
 * @param {*} page 
 * @param {*} limit 
 * @returns 
 */
export async function getMovies(page = 1, limit = 10) {
    let resp = await request.get('/api/movies', {
        params: {
            page,
            limit
        }
    })

    return resp.data
}

/**
 * 获取电影详情
 * @param {*} id 
 * @returns 
 */
export async function getMovie(id) {
    let resp = await request.get(`/api/movie/'${id}`)
    return resp.data
}