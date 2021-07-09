import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from "react"
export default function Movies(props) {
    const [navList, setNavList] = useState([
        { path: "/movies/1", name: "1电影" },
        { path: "/movies/2", name: "2电影" },
        { path: "/movies/3", name: "3电影" }
    ])

    let list = navList.map(item => {
        return (
            <li key={item.name}><Link href={item.path} ><a>{item.name}</a></Link></li>
        )
    })

    return (
        <div>
            <Head>
                <title>电影页</title>
            </Head>
            <h1>电影页</h1>
            <ul>
                {list}
            </ul>
        </div>
    )
}

// 该函数只可能在服务端运行
// 该函数运行在组件渲染之前
// 该函数只能在build时运行
// 返回的对象中的props属性，将被混合到整个组件属性中。
export async function getStaticProps() {
    return {
        props: {
            a: 1,
            b: 2
        }
    }
}