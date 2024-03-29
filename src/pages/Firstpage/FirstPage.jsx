import { Title } from "../../components/Title/Title";
import style from "./FirstPage.module.scss";
import { useFetch } from '../../hooks/useFetch'
import { NewsCard } from "../../components/NewsCard/NewsCard";
import { RoomCard } from "../../components/RoomCard/RoomCard";

export function FirstPage() {

    //Henter news
    const newsList = useFetch('http://localhost:4000/news');
    const news = newsList?.data
    let threeNews = news?.slice(0, 3)

    //LAV 3 ROOMCARDS
    //Henter rooms
    const roomOneList = useFetch('http://localhost:4000/destinations/tyskland/berlin/overlook-berlin-potsdamer-platz/superior-plus');
    const roomTwoList = useFetch('http://localhost:4000/destinations/finland/rauma/overlook-rauma/presidental-suite');
    const roomthreeList = useFetch('http://localhost:4000/destinations/danmark/silkeborg/overlook-silkeborg/standard');
    //Simpel sti
    const roomOne = roomOneList?.data?.cities[0]?.hotels[0]?.rooms[0];
    const roomTwo = roomTwoList?.data?.cities[0]?.hotels[0]?.rooms[0];
    const roomThree = roomthreeList?.data?.cities[0]?.hotels[0]?.rooms[0];

    // console.log('roomOne', roomOne);
    // console.log('roomTwo', roomTwo);
    // console.log('roomThree', roomThree);

    //Mapper nyheder i newsCard og lave 3 roomCards 
    //Jeg har haft store problemmer med dataen til roomCard.
    return (
        <section className={style.forside}>
            <Title title="Velkommen til Hotel Overlook online" />
            <section className={style.newsWrapper}>
                {threeNews &&
                    threeNews?.map((item) => {
                        return (
                            <article key={item.id}>
                                <NewsCard
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
                <RoomCard
                    imageSrc={`http://localhost:4000/images/${roomOne?.images[0].filename}`}
                    title={roomOne?.title}
                    priceLow={roomOne?.day_price_normal}
                    priceHigh={roomOne?.day_price_flex}
                />
                <RoomCard
                    imageSrc={`http://localhost:4000/images/${roomTwo?.images[0].filename}`}
                    title={roomTwo?.title}
                    priceLow={roomTwo?.day_price_normal}
                    priceHigh={roomTwo?.day_price_flex}
                />
                <RoomCard
                    imageSrc={`http://localhost:4000/images/${roomThree?.images[0].filename}`}
                    title={roomThree?.title}
                    priceLow={roomThree?.day_price_normal}
                    priceHigh={roomThree?.day_price_flex}
                />
            </section>
        </section >
    )

}
