import style from './Breadcrumb.module.scss'


export const Breadcrumb = ({ items }) => {


    return (
        <div className={style.breadcrumb}>
            {items.map((item, index) => (
                <span key={index}>
                    {item}
                    {index !== items.length - 1 && <span> &gt; </span>}
                </span>
            ))}
        </div>
    );
};