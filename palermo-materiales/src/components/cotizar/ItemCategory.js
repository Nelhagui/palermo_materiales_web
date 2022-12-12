import { useEffect, useState } from "react"

const ItemCategory = ({c, selectCategory}) => {

    const [isSelected, setIsSelected] = useState(false);
    const changeCategorySelected = () => { setIsSelected(!isSelected) }
    
    return (
        <>
            <div className={"cotizar-items"} onClick={() => selectCategory(c)}>
                <img src={c?.foto} alt="foto" />
                <p>{c?.titulo}</p>
            </div>
        </>
    )
}
export default ItemCategory;