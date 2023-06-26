import React from 'react'
import { precio } from '../../utils/precio.js';
const ItemsCart = ({item, deleteItem}) => {  
    const listItems =  item?.producto_combinado?.productos_simples?.map((p) => {
            return (
                <div className="item-panel" key={Math.random()}>
                    <div className="pago-text"> - {p.titulo}</div>
                    <div className="pago-text">{p.cantidad}</div>
                    <div className="pago-text">${precio(p?.precio_x_unidad, 2, ',', '.')} </div>
                    <div className="pago-text">${precio(p?.subtotal, 2, ',', '.')} </div>
                    <div className="pago-text"></div>
                </div>
            )
    })

    const removeItem = ( () => {
        deleteItem(item?.producto_combinado_id);
    })

    return (
        <>
            {
                item.producto_combinado.productos_simples.length > 1
                ?
                    <>
                        <div className="table accordion active">
                            <div className="pago-text">{item.producto_combinado.titulo}</div>
                            <div className="pago-text"></div>
                            <div className="pago-text"></div>
                            <div className="pago-text"></div>
                            <div className="pago-text" style={{textAlign: 'center'}}>
                                <span style={{cursor: 'pointer', padding: '8px'}} onClick={()=>removeItem()}>X</span>
                            </div>
                        </div>
                        <div className="panel">
                            {listItems}
                        </div>
                    </>
                :
                <>
                    <div className="table accordion active">
                        <div className="pago-text">{item.producto_combinado?.productos_simples[0]?.titulo}</div>
                        <div className="pago-text">{item.producto_combinado?.productos_simples[0]?.cantidad}</div>
                        <div className="pago-text">${precio(item.producto_combinado?.productos_simples[0]?.precio_x_unidad, 2, ',', '.')}</div>
                        <div className="pago-text">${precio(item?.cotizacion?.subtotal, 2, ',', '.')}</div>
                        <div className="pago-text" style={{textAlign: 'center'}}>
                            <span style={{cursor: 'pointer', padding: '8px'}} onClick={()=>removeItem()}>X</span>
                        </div>
                    </div>
                </>
            }
            
            
        </>
    )
}

export default ItemsCart
