import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import { Cities } from '../Cities/Cities'
import style from './Country.module.scss';

export const Country = ({ itemSlug }) => {
    const breadcrumbItems = ['Valg af land', 'Valg af by'];//, 'Valg af by', 'Valg af hotel', 'Valg af værelse', 'Reserver værelse'
    const oneCountryData = useFetch(`http://localhost:4000/destinations/${itemSlug}`)
    const oneCountry = oneCountryData?.data
    const [citySlug, setCitySlug] = useState('')

    function handelCitySlug(slug) {
        setCitySlug(slug)
        return (citySlug)
    }
    // console.log('ET LAND: ', oneCountry);
    console.log('city slug', citySlug);

    return (
        <section className={style.countryWrapper}>
            <Breadcrumb items={breadcrumbItems} />
            {oneCountry && citySlug && itemSlug &&
                citySlug ? <Cities citySlug={citySlug} itemSlug={itemSlug} />
                :
                <>
                    <h2>{oneCountry?.name}</h2>
                    <figure>
                        {oneCountry?.CountryImage?.country_image_filename && <img src={`http://localhost:4000/images/${oneCountry?.CountryImage?.country_image_filename}`} alt={`http://localhost:4000/images/${oneCountry.CountryImage.country_image_filename}`} />}
                        <figcaption>{oneCountry?.description}</figcaption>
                    </figure>
                    <ul>
                        <h4>Vælg en by:</h4>
                        {oneCountry &&
                            oneCountry?.cities?.map((item) => {
                                return (
                                    <li key={item.id} onClick={() => handelCitySlug(item.slug)}>{item.name}</li>
                                )
                            })}
                    </ul>
                </>
            }
        </section >
    )
}