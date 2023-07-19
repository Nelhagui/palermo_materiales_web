import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Wallet } from "@mercadopago/sdk-react";
import ModalEmailMethod from './ModalEmailMethod.js';
import { precio } from '../../utils/precio.js';

const PaymentMethods = ({mpDisabled}) => {
    const [orderData, setOrderData] = useState({ quantity: "1", price:  JSON.parse(localStorage.compra).monto_total, amount: JSON.parse(localStorage.compra).monto_total, description: "Compra online Palermo Materiales" });
    const [preferenceId, setPreferenceId] = useState(null)
    const [showMethodEmail, setShowMethodEmail] = useState(false)
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      console.log('cargando mp')
      getPreferenceMp()
    }, [])
    

    const customization = {
        texts: {
            action: 'pay',
            valueProp: '',
        },
        visual: {
            borderRadius: '6px',
            buttonHeight: '44px',
        },
    }
    const handleOnReady = () => {
        setIsReady(true);
    }
    const renderCheckoutButton = (preferenceId) => {
        if (!preferenceId) return null;
        return (
            <Wallet 
                customization={customization}
                disabled={mpDisabled}
                initialization={{ preferenceId: preferenceId, redirectMode: 'modal' }}
                onReady={handleOnReady} 
            />
        )
    }

    //mercadopago
    const getPreferenceMp = () => {
            fetch(`https://palermomateriales.cartasimple.com.ar/payment/`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderData),
        })
          .then((response) => {
            return response.json();
          })
          .then((preference) => {
            setPreferenceId(preference.id);
          })
          .catch((error) => {
            console.error(error);
          }).finally(() => {
            // setIsLoading(false);
          })
      };
    // fin mercadopago

    return (
        <>
            <div className='cont-radios'>
                <div className='row'>
                    <div className='col-lg-4' style={{padding: '0px 5px'}}>
                        {
                            mpDisabled ? <div id="btn-cont" className="btn-secondary mp" style={{marginTop: '16px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', width: '100%'}}> <p className="pago-text" title='Aceptar términos y condiciones' style={{marginBottom: '1.3rem'}}>Pagar con Mercado Pago</p> </div>   : renderCheckoutButton(preferenceId)
                            ? 
                                mpDisabled ? <div id="btn-cont" className="btn-secondary mp" style={{marginTop: '16px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', width: '100%'}}> <p className="pago-text" title='Aceptar términos y condiciones' style={{marginBottom: '1.3rem'}}>Pagar con Mercado Pago</p> </div>   : renderCheckoutButton(preferenceId)
                            :
                                <div id="btn-cont" className="btn-secondary mp" style={{marginTop: '16px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', width: '100%'}}>
                                    <p className="pago-text">Cargando...</p>
                                </div> 
                        }
                    </div>

                    <div className='col-lg-4' style={{padding: '0px 4px'}}>
                        <div id="btn-cont" className="btn-secondary" onClick={() => setShowMethodEmail(true)} style={{marginTop: '16px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px'}}>
                            <p className="pago-text"> Coordinar por email</p>
                        </div>
                    </div>
                    
                    <div className='col-lg-4' style={{padding: '0px 1px'}}>
                        <div className="btn-primary pago-text" style={{marginTop: '16px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px'}}>
                            <Link to="/cotizar">Seguir comprando</Link>
                        </div>
                    </div>
                </div>
            </div>
            { showMethodEmail ? <ModalEmailMethod setShowMethodEmail={setShowMethodEmail}/> : "" }
        </>
    )
}

export default PaymentMethods