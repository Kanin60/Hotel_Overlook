import style from './Title.module.scss'

export const Title = ({ title }) => {

    return (
        <>
            <section className={style.titleWrapper}>
                <h1 className={style.title}>{title}</h1>
                <div className={style.redline}></div>
            </section>

        </>
    )
}

