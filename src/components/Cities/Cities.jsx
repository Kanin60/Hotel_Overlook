import style from './Cities.module.scss'
import { useFetch } from "../../hooks/useFetch";

export const Cities = (itemSlug) => {

    console.log('Cities itemSlug:', itemSlug);

    const Cities = useFetch(`http://localhost:4000/destinations/${itemSlug}`)

    console.log('data', Cities);


    return (
        <>

        </>
    )
}