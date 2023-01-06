import MercadoPagoForm from "./mercadopago/MercadoPagoForm.js";

const MpMethods = ({previousStep}) => {

    return (
        <>

            <MercadoPagoForm></MercadoPagoForm>
            <div className="btn-secondary" onClick={() => previousStep()}>
                <p> REGRESAR </p>
            </div>
        </>
        
    );




    
    
}

export default MpMethods




// MAQUETADO FINAL
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
    //     </div>
    // )