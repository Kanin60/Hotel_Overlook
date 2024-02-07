import { Title } from "../../components/Title/Title";
import style from "./FirstPage.module.scss";
import { useFetch } from '../../hooks/useFetch'
import { useEffect, useState } from "react";
import { NewsCard } from "../../components/NewsCard/NewsCard";

export function FirstPage() {
    const newsList = useFetch('http://localhost:4000/news');
    const news = newsList?.data
    let threeNews = news?.slice(0, 3)

    console.log('NEWS', threeNews);
    return (
        <section className={style.forside}>
            <Title title="Velkommen til Hotel Overlook online" />
            <section className={style.newsWrapper}>
                {threeNews &&
                    threeNews?.map((item) => {
                        return (
                            <article key={item.id}>
                                <NewsCard
                                    {...() => handelImgSrc(item.image_id)}
                                    imageSrc={`http://localhost:4000/images/${item.image.filename}`}
                                    title={item.title}
                                    teaser={item.teaser}
                                />
                            </article>
                        )
                    })
                }
            </section>
        </section>
    )

}
