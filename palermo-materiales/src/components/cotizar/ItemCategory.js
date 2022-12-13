import { useEffect, useState } from "react"

const ItemCategory = ({c, selectCategory, idCategorySelected}) => {

    const [isSelected, setIsSelected] = useState(false);
    let styleItem = 'cotizar-items';
    if(idCategorySelected !== false) {
        if(c.id === idCategorySelected)
            styleItem = 'cotizar-items selected';
    }
    const changeIsSelected = (() => {
        setIsSelected(!isSelected)
    })

    useEffect(()=> {
        if(isSelected)
        {
            selectCategory(c);
        }
    }, [isSelected]);
    
    return (
        <>
            <div className={styleItem} onClick={() => {changeIsSelected()}}>
                <img src={c?.foto} alt="foto" />
                <p>{c?.titulo}</p>
            </div>
        </>
    )
}
export default ItemCategory;