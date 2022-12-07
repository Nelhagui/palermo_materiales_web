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
            <table className={tabActive ? "table accordion active" : "table accordion" } onClick={()=> changeTabActive()}>
                <tbody>
                    <tr className="cont-columns-table">
                        <td>{item.producto_combinado.titulo}</td>
                        <td>{item.producto_combinado.unidad}</td>
                        <td>{item.cotizacion.cantidad}</td>
                        <td>-</td>
                        <td>${item.subtotal}</td>
                    </tr>
                </tbody>
            </table>
            <div className="panel" style={{ maxHeight: styleMaxHeight }}>
                <table className="table">
                    <tbody>
                        {item?.producto_combinado?.productos_simples?.map((p) => {
                            return (
                                <tr className="cont-columns-table">
                                    <td>{p.alias}</td>
                                    <td>{p.unidad}</td>
                                    <td>{p.cantidad}</td>
                                    <td>{p.precio_x_unidad}</td>
                                    <td>${p.subtotal}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ItemsCart
