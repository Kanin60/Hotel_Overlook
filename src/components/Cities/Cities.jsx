import style from './Cities.module.scss'
import { useFetch } from "../../hooks/useFetch";
import { useState } from 'react';

export const Cities = ({ itemSlug, citySlug }) => {

    const citiesData = useFetch(`http://localhost:4000/destinations/${itemSlug}/${citySlug}`)
    const cities = citiesData?.data?.cities[0]
    const [hotelSlug, setHotelSlug] = useState('')

    //Sætter hotelSlug som skal sendes med til Hotels component - blev ikke færdig
    function handelHotelSlug(slug) {
        setHotelSlug(slug)
    }
    // console.log('data', cities);
    console.log('hotelSlug', hotelSlug);

    // returner info om by og liste med hoteller, som man kan trykke på og få hotel-slug
    return (
        <>
            {cities &&
                <section className={style.citiesWrapper}>
                    <h2>{cities?.name}</h2>
                    <figure>
                        <img src={`http://localhost:4000/images/${cities?.CityImage?.city_image_filename}`} alt={cities?.CityImage?.city_image_title} />
                        <figcaption>{cities.description}</figcaption>
                    </figure>
                    <ul>
                        <h4>Hoteller i {cities?.name}</h4>
                        {cities?.hotels?.map((item) => {
                            return (
                                <li onClick={() => handelHotelSlug(item.slug)}>{item?.title}</li>
                            )
                        })}
                    </ul>
                </section>
            }
        </>
    )
}