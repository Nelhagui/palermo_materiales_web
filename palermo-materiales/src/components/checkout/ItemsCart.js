import React, { useEffect, useState } from 'react'
const ItemsCart = ({item}) => {  
    const [tabActive, setTabActive] = useState(false)
    const [styleMaxHeight, setStyleMaxHeight] = useState('0px')
    const changeTabActive = () => { setTabActive(!tabActive) }

    useEffect(() => {
        if(tabActive){
            const panel = document.querySelector('.panel');
            setStyleMaxHeight(`${panel.scrollHeight}px`)
        } else {
            setStyleMaxHeight("0px")
        }
    }, [tabActive])

    return (
        <>
            <div className={tabActive ? "table accordion active" : "table accordion" } onClick={()=> changeTabActive()}>
                <div>{item.producto_combinado.titulo}</div>
                <div>{item.producto_combinado.unidad}</div>
                <div>-</div>
                <div>-</div>
                <div>${item.subtotal}</div>
            </div>
            <div className="panel" style={{ maxHeight: styleMaxHeight }}>
                {item?.producto_combinado?.productos_simples?.map((p) => {
                    return (
                        <div className="item-panel">
                            <td>{p.alias}</td>
                            <td>-</td>
                            <td>{p.cantidad}</td>
                            <td>${p.precio_x_unidad}</td>
                            <td>${p.subtotal}</td>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ItemsCart
