//动态路由

import { useRouter } from "next/dist/client/router";


export default (params) => {

    let router = useRouter()
    console.log("详情页打印", params);
    return <div>

        <h1>电影详情页</h1>
        <span>
            id：{router.query.id}
            电影：{params.movies}
        </span>
    </div>

}
export function getServerSideProps({ req, res, query }) {
    console.log("getServerSideProps打印", query);
    return {
        props: {
            movies: "这是一部电影"
        }
    }
}