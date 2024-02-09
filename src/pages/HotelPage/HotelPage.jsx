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

    const [destinationsSlug, setDestinationsSlug] = useState('')
    const [citySlug, setCitySlug] = useState(null)

    //sætter slug som sendes med component
    function handelDestinationsSlug(slug) {
        setDestinationsSlug(slug)
    }
    // console.log('slug', destinationsSlug);

    //sætter slug som sendes med component
    function handelCitySlug(slug) {
        setCitySlug(slug)
    }
    console.log('slug', citySlug);

    // retunere navitation med alle lande og componenter med enten alle lande eller et land - lavet med en ternary operator
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