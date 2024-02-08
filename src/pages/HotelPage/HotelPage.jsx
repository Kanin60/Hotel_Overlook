import { Title } from "../../components/Title/Title";
import style from './HotelPage.module.scss';
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";
import { Countries } from "../../components/Countries/Countries";
import { Country } from "../../components/Country/Country";

export function HotelPage() {

    // lande
    const destinationsList = useFetch('http://localhost:4000/destinations');
    const destinationsArray = destinationsList?.data
    // byer
    // const oneCountryData = useFetch(`http://localhost:4000/destinations/?${destinationsSlug}`)
    // const oneCountry = oneCountryData?.data

    const [breadcrumbItems, setBreadcrumbItems] = useState(['']);
    const [destinationsSlug, setDestinationsSlug] = useState('')
    const [citySlug, setCitySlug] = useState(null)

    const [hotelSlug, setHotelSlug] = useState(null)
    const [roomSlug, setRoomSlug] = useState(null)
    //Valg af land, 'Valg af by', 'Valg af hotel', 'Valg af værelse', 'Reserver værelse'


    function handelDestinationsSlug(slug) {
        setDestinationsSlug(slug)
    }
    // console.log('slug', destinationsSlug);

    function handelCitySlug(slug) {
        setCitySlug(slug)

    }
    console.log('slug', citySlug);

    // function handelHotelSlug(slug) {
    //     setHotelSlug(slug)
    // }
    // console.log('slug', hotelSlug);

    // function handelRoomSlug(slug) {
    //     setRoomSlug(slug)
    // }
    // console.log('slug', roomSlug);

    return (
        <section className={style.hotelPage}>
            <Title title="Hoteller & Destinationer" />
            {destinationsArray &&
                <>
                    <nav className={style.navcountries}>
                        <ul>
                            {destinationsArray?.map((item) => {
                                return (
                                    <li key={item.id} onClick={() => handelDestinationsSlug(item.slug)}>{item.name}</li>
                                )
                            })}
                        </ul>
                    </nav>
                    <section>

                        {destinationsSlug &&
                            destinationsSlug ? <Country itemSlug={destinationsSlug} onClick={() => handelCitySlug(item.slug)} />
                            : <Countries />
                        }
                    </section>
                </>
            }
        </section>
    )
}