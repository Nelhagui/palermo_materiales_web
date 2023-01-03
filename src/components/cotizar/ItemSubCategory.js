import { useEffect, useState } from "react"

const ItemSubCategory = ({s, selectSubcategory}) => {

    return (
        <div className="col-md-3 cotizar-subitems"  onClick={() => selectSubcategory(s)}>
            <div className="circle-subcategorias">
                <img src={s.icon} alt="icon" />
            </div>
            <div className="title-subcategorias">
                <p className="h6">{s.titulo}</p>
            </div>
        </div>
    )
}
export default ItemSubCategory;