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
                <div className="pago-text">{item.producto_combinado.titulo}</div>
                <div className="pago-text">{item.producto_combinado.unidad}</div>
                <div className="pago-text">-</div>
                <div className="pago-text">-</div>
                <div className="pago-text">${item.subtotal}</div>
            </div>
            <div className="panel" style={{ maxHeight: styleMaxHeight }}>
                {item?.producto_combinado?.productos_simples?.map((p) => {
                    return (
                        <div className="item-panel" key={Math.random()}>
                            <div className="pago-text">{p.alias}</div>
                            <div className="pago-text">-</div>
                            <div className="pago-text">{p.cantidad}</div>
                            <div className="pago-text">${p.precio_x_unidad}</div>
                            <div className="pago-text">${p.subtotal}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ItemsCart
