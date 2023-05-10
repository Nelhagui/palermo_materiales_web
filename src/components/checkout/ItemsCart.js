import React, { useEffect, useState } from 'react'
const ItemsCart = ({item}) => {  
    const [tabActive, setTabActive] = useState(true)
    const [styleMinHeight, setStyleMinHeight] = useState('max-content')
    const changeTabActive = () => { setTabActive(!tabActive) }

    useEffect(() => {
        if(tabActive){
            const panel = document.querySelector('.panel');
            setStyleMinHeight(`${panel.scrollHeight}px`)
        } else {
            setStyleMinHeight("0px")
        }
    }, [tabActive])
    
    let cantItemsGrupo = 0;
    const listItems =  item?.producto_combinado?.productos_simples?.map((p) => {
        cantItemsGrupo = cantItemsGrupo+p.cantidad;
            return (
                <div className="item-panel" key={Math.random()}>
                    <div className="pago-text"> - {p.alias}</div>
                    <div className="pago-text">-</div>
                    <div className="pago-text">{p.cantidad}</div>
                    <div className="pago-text">${p.precio_x_unidad}</div>
                    <div className="pago-text">${p.subtotal}</div>
                </div>
            )
    })



    return (
        <>
            <div className={tabActive ? "table accordion active" : "table accordion" } onClick={()=> changeTabActive()}>
                <div className="pago-text">{item.producto_combinado.titulo}</div>
                <div className="pago-text">{item.producto_combinado.unidad}</div>
                <div className="pago-text">{cantItemsGrupo}</div>
                <div className="pago-text">-</div>
                <div className="pago-text">${item.subtotal}</div>
            </div>
            <div className="panel" style={{ minHeight: styleMinHeight }}>
                    {listItems}
            </div>
        </>
    )
}

export default ItemsCart
