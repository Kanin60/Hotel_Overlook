import style from './Countries.module.scss'
import { useFetch } from "../../hooks/useFetch";
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';

export const Countries = () => {

    const breadcrumbItems = ['Valg af land',];//, 'Valg af by', 'Valg af hotel', 'Valg af værelse', 'Reserver værelse'
    const contriesList = useFetch('http://localhost:4000/destinations')
    const contries = contriesList.data

    // console.log('data', contries);

    return (
        <section className={style.contryWrapper}>
            <Breadcrumb items={breadcrumbItems} />
            <div className={style.countries}>
                {contries &&
                    contries?.map((item) => {
                        return (
                            <figure key={item.id}>
                                <img src={`http://localhost:4000/images/${item.CountryImage.country_image_filename}`} alt={`http://localhost:4000/images/${item.CountryImage.country_image_filename}`} />
                                <figcaption><h3>{item.name}</h3><p>{item.description}</p></figcaption>
                            </figure>
                        )
                    })
                }
            </div>


        </section>
    )
}