import { Title } from "../../components/Title/Title";
import style from "./FirstPage.module.scss";
import { useFetch } from '../../hooks/useFetch'
import { useEffect, useState } from "react";
import { NewsCard } from "../../components/NewsCard/NewsCard";
import { RoomCard } from "../../components/RoomCard/RoomCard";

export function FirstPage() {
    const newsList = useFetch('http://localhost:4000/news');
    const news = newsList?.data
    let threeNews = news?.slice(0, 3)

    //LAV 3 ROOMCARDS

    const [roomArr, setRoomArr] = useState([])
    const roomOneList = useFetch('http://localhost:4000/destinations/tyskland/berlin/overlook-berlin-potsdamer-platz/superior-plus');
    const roomTwoList = useFetch('http://localhost:4000/destinations/finland/rauma/overlook-rauma/presidental-suite');
    const roomthreeList = useFetch('http://localhost:4000/destinations/danmark/silkeborg/overlook-silkeborg/standard');

    useEffect(() => {
        const roomOne = roomOneList?.data?.cities[0]?.hotels[0]?.rooms[0];
        const roomTwo = roomTwoList?.data?.cities[0]?.hotels[0]?.rooms[0];
        const roomThree = roomthreeList?.data?.cities[0]?.hotels[0]?.rooms[0];

        if (roomOne && roomTwo && roomThree) {
            setRoomArr([roomOne, roomTwo, roomThree])
        }
    }, [])

    // console.log(roomOne.images[0].filename);
    console.log('IMG', roomOneList);
    console.log('ROOMS:', roomArr);

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
                                    imageSrc={`http://localhost:4000/images/${item?.image?.filename}`}
                                    title={item?.title}
                                    teaser={item?.teaser}
                                />
                            </article>
                        )
                    })
                }
            </section>
            <section className={style.roomsWrapper}>
                {roomArr && roomArr.length > 0 &&
                    roomArr?.map((item) => {
                        return (
                            <div key={item.room_id}>
                                <RoomCard
                                    {...() => handelImgSrc(item.image_id)}
                                    // imageSrc={`http://localhost:4000/images/${item?.images[0]?.filename}`}
                                    title={item.title}
                                    priceLow={item.day_price_normal}
                                    priceHigh={item.day_price_flex}
                                />
                            </div>
                        )
                    })
                }
            </section>
        </section>
    )

}
