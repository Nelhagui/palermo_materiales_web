import React, { useState } from 'react'
const ItemsCart = ({item}) => {  
    const [tabActive, setTabActive] = useState(false)
    const changeTabActive = () => {
        setTabActive(!tabActive);
    }

  return (
    <>
        <table className={tabActive ? "table accordion active" : "table accordion" } onClick={()=>changeTabActive()}>
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
        <div className="panel">
            <table className="table">
                <tbody>
                    <tr className="cont-columns-table">
                        <td>otro</td>
                        <td>otro</td>
                        <td>{item.cotizacion.cantidad}</td>
                        <td>-</td>
                        <td>${item.subtotal}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ItemsCart
