import style from './Cities.module.scss'
import { useFetch } from "../../hooks/useFetch";
import { useState } from 'react';

export const Cities = ({ itemSlug, citySlug }) => {

    const citiesData = useFetch(`http://localhost:4000/destinations/${itemSlug}/${citySlug}`)
    const cities = citiesData?.data?.cities[0]
    const [hotelSlug, setHotelSlug] = useState('')


    function handelHotelSlug(slug) {
        setHotelSlug(slug)
    }
    console.log('data', cities);
    console.log('hotelSlug', hotelSlug);

    return (
        <>
            {cities &&
                <section className={style.citiesWrapper}>
                    <p>CITIES</p>
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