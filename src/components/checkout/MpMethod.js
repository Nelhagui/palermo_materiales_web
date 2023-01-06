import React, { useState, useEffect } from 'react';
import useMercadoPago from '../../utils/UseMercadoPago.js';
const INITIAL_STATE = {
    cvc: "",
    cardExpirationMonth: "",
    cardExpirationYear: "",
    focus: "cardNumber",
    cardholderName: "",
    cardNumber: "",
    issuer: "",
};

const MpMethod = ({previousStep}) => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.compra).cotizaciones)
    const [state, setState] = useState(INITIAL_STATE);
    const resultPayment = useMercadoPago();

    useEffect(() => {
      console.log(resultPayment)
    }, [resultPayment])
    

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.dataset.name || e.target.name]: e.target.value,
        });
    };

    const handleInputFocus = (e) => {
        setState({ ...state, focus: e.target.dataset.name || e.target.name });
    };
   
    useEffect(() => {
        if(cartItems.length > 0) {
            let preference = cartItems.map((item) => {
                return {
                    title: item.producto_combinado.titulo,
                    quantity: item.cantidad,
                    currency_id: 'ARS',
                    unit_price: item.subtotal / item.cantidad
                }
            })
            // MP.preferences.create(preference);
        }
      
    }, [cartItems])
    
    
    // const preference = {
    // items: [
    //   {
    //     title: 'Test',
    //     quantity: 1,
    //     currency_id: 'ARS',
    //     unit_price: 10.5
    //   }
    // ]
    // };
    // console.log(cart)
    


    return (
        <div className="container">
            

            <form id="form-checkout">
                <div className="form-control pago-text">
                    <input
                        type="tel"
                        name="cardNumber"
                        id="form-checkout__cardNumber"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                </div>
                <div className="form-control pago-text">
                    <input
                        type="tel"
                        name="cardExpirationMonth"
                        id="form-checkout__cardExpirationMonth"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <input
                        type="tel"
                        name="cardExpirationYear"
                        id="form-checkout__cardExpirationYear"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <input
                        type="tel"
                        name="cvc"
                        id="form-checkout__securityCode"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                </div>
                <div className="form-control pago-text">
                    <input
                        type="text"
                        name="cardholderName"
                        id="form-checkout__cardholderName"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <input
                        type="email"
                        name="cardholderEmail"
                        id="form-checkout__cardholderEmail"
                        onFocus={handleInputFocus}
                    />
                </div>
                <div className="form-control pago-text">
                    <select
                        name="issuer"
                        id="form-checkout__issuer"
                        on
                    ></select>
                    <select
                        name="identificationType"
                        id="form-checkout__identificationType"
                    ></select>
                </div>
                <div className="form-control pago-text">
                    <input
                        type="text"
                        name="identificationNumber"
                        id="form-checkout__identificationNumber"
                    />
                </div>
                <div className="form-control pago-text">
                    <select
                        name="installments"
                        id="form-checkout__installments"
                    ></select>
                </div>
                <div className="form-control pago-text">
                    <button className="pago-text btn-primary" type="submit" id="form-checkout__submit">
                        Pagar
                    </button>
                </div>
                <progress value="0" className="progress-bar">
                    Cargando...
                </progress>
            </form>
            {resultPayment && <p>{JSON.stringify(resultPayment)}</p>}
                     <div className="btn-secondary btn-back" onClick={() => previousStep()}>
                 <p className="pago-text">REGRESAR </p>
             </div>
        </div>
    );




    
    // return (
    //     <div className='cont-form-mp'>
    //         <div className='row'>
    //             <p>Abonar con mercado pago</p>
    //         </div>
    //         <div className='row cont-form'>
    //             <div className='col-md-3'>
    //                 <div className='cont-form'>
    //                     <label htmlFor="nro_tarjeta">Numero de tarjeta</label>
    //                     <input type="text" className='input-mp'/>
    //                 </div>
    //             </div>
    //             <div className='col-md-2'>
    //                 <div className='cont-form'>
    //                     <label htmlFor="cvv">CVV</label>
    //                     <input type="text" className='input-mp'/>
    //                 </div>
    //             </div>
    //             <div className='col-md-2'>
    //                 <div className='cont-form'>
    //                     <label htmlFor="vencimiento">Vencimiento</label>
    //                     <input type="text" className='input-mp'/>
    //                 </div>
    //             </div>
    //             <div className='col-md-3'>
    //                 <div className='cont-form'>
    //                     <label htmlFor="medio_de_pago">Medio de pago</label>
    //                     <input type="text" className='input-mp'/>
    //                 </div>
    //             </div>
    //             <div className='col-md-2'>
    //                 <p>Texto</p>
    //             </div>
    //         </div>
    //         <div className='row cont-form'>
    //             <div className='col-md-3'>
    //                 <div className='cont-form'>
    //                     <label htmlFor="nombre">Nombre del titular</label>
    //                     <input type="text" className='input-mp'/>
    //                 </div>
    //             </div>
    //             <div className='col-md-2'>
    //                 <div className='cont-form'>
    //                     <label htmlFor="tipo_documento">Tipo de documento</label>
    //                     <input type="text" className='input-mp'/>
    //                 </div>
    //             </div>
    //             <div className='col-md-2'>
    //                 <div className='cont-form'>
    //                     <label htmlFor="nro_documento">Nro. de documento</label>
    //                     <input type="text" className='input-mp'/>
    //                 </div>
    //             </div>
    //             <div className='col-md-3'>
    //                 <div className='cont-form'>
    //                     <label htmlFor="email">Email</label>
    //                     <input type="email" className='input-mp'/>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="btn-secondary" onClick={() => previousStep()}>
    //             <p> REGRESAR </p>
    //         </div>
            
    //     </div>
    // )
}

export default MpMethod