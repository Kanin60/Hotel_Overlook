import { useFetch } from '../../hooks/useFetch';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import style from './Country.module.scss';

export const Country = ({ itemSlug }) => {
    const breadcrumbItems = ['Valg af land', 'Valg af by'];//, 'Valg af by', 'Valg af hotel', 'Valg af værelse', 'Reserver værelse'
    const oneCountryData = useFetch(`http://localhost:4000/destinations/${itemSlug}`)
    const oneCountry = oneCountryData?.data

    console.log('ET LAND: ', oneCountry);
    console.log('SLUG', itemSlug);

    return (
        <section className={style.countryWrapper}>
            <Breadcrumb items={breadcrumbItems} />
            <h3>sup? </h3>
            {itemSlug &&
                <p>{itemSlug ? itemSlug : "Det virker ikke"}</p>}
        </section>
    )
}