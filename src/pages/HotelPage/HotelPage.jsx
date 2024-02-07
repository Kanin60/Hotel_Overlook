import { Title } from "../../components/Title/Title";
import style from './HotelPage.module.scss';
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";
import { Countries } from "../../components/Countries/Countries";
import { Country } from "../../components/Country/Country";

export function HotelPage() {


    // useFetch
    const destinationsList = useFetch('http://localhost:4000/destinations');
    const destinationsArray = destinationsList?.data
    const [itemSlug, setItemSlug] = useState('')

    function handelItemSlug(slug) {
        setItemSlug(slug)
    }
    console.log(itemSlug);

    return (
        <section className={style.hotelPage}>
            <Title title="Hoteller & Destinationer" />
            {destinationsArray &&
                <nav className={style.navcountries}>
                    <ul>
                        {destinationsArray?.map((item) => {
                            return (
                                <li key={item.id} onClick={() => handelItemSlug(item.slug)}>{item.name}</li>
                            )
                        })}
                    </ul>
                </nav>
            }
            {/* <Breadcrumb items={breadcrumbItems} /> */}
            <section>
                {!itemSlug === '' ? <Country itemSlug={itemSlug} /> : <Countries />
                    // Lav en if statement 
                }


            </section>

        </section>
    )
}