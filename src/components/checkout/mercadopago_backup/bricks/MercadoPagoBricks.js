import React, {useState, useEffect, useContext} from 'react'
import CartContext from '../../../../context/CartContext.js';
import UseScript from '../../../../utils/UseScript.js';
import Spinner from '../../../Spinner.js';
import ProcessResponse from './hooks/ProcessResponse.js';


const MercadoPagoBricks = ({setIsDisabledBtnPreviousStep}) => {
    const [sendingPayment, setSendingPayment] = useState(false)
    const { addProduct } = useContext(CartContext)
    const [msjErrorMp, setMsjErrorMp] = useState('')
    const [canPay, setCanPay] = useState(true)
    const [isPaid, setIsPaid] = useState(false)
    const [totalPrice] = useState( JSON.parse(localStorage.getItem('compra')).monto_total )

    const createPayment = () => {
        setSendingPayment(true)
        setIsDisabledBtnPreviousStep(true)
        window.cardPaymentBrickController.getFormData()
            .then((cardFormData) => {
                fetch("https://test.cartasimple.com.ar/testing/mp-bric/", { 
                            method: "POST",
                            headers: {
                                "Accept": "application/json",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(cardFormData), 
                        })
                .then((response) => response.json())
                .then((data) => {
                    setIsDisabledBtnPreviousStep(false)
                    setSendingPayment(false)
                    if(data.status === "approved") {
                        setIsPaid(true);
                        setCanPay(false);
                        setMsjErrorMp('')
                    }
                    else if(data.status === "rejected") {
                        const msjError = ProcessResponse(data.status_detail);
                        setMsjErrorMp(`*${msjError}`)
                    }
                })
            })
    };
    const { MercadoPago } = UseScript(
        "https://sdk.mercadopago.com/js/v2",
        "MercadoPago"
    );

    useEffect(() => {
        if (MercadoPago) 
        {
            // const mp = new MercadoPago("APP_USR-9a50cf8c-da4a-4a6d-9485-d30478fd7087", {
            //     locale: 'es-AR',
            // });
            const mp = new MercadoPago("TEST-1228f104-bb7c-4706-a8c0-35997f1c4135", {
                locale: 'es-AR',
            });
            const bricksBuilder = mp.bricks();
            const renderCardPaymentBrick = async (bricksBuilder) => {
                const settings = {
                  initialization: {
                    amount: totalPrice, // monto a ser pago
                    payer: {
                      email: "",
                    },
                  },
                  customization: {
                    visual: {
                      hideFormTitle: true,
                      hidePaymentButton: true,
                      style: {
                        theme: 'default', // | 'dark' | 'bootstrap' | 'flat'
                      }
                    },
                    // paymentMethods: {
                    //     minInstallments: 1,
                    //     maxInstallments: 3,
                    // },
                  },
                  callbacks: {
                    onReady: () => {
                      // callback llamado cuando Brick esté listo
                    },
                    onError: (error) => {
                      // callback llamado para todos los casos de error de Brick
                    },
                  },
                };
                window.cardPaymentBrickController = await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
              };
              renderCardPaymentBrick(bricksBuilder);
        }
    }, [MercadoPago]);


    useEffect (()=>{
        if(isPaid === true){
            addProduct([]);
        }
    }, [isPaid])

    return (
        <>
            <div id="cardPaymentBrick_container">
            </div>
            <div id="wallet_container"></div>
            <div className='msj_error_mp'>{msjErrorMp}</div>
            {
                sendingPayment 
                ?
                    <button  className="btn-primary disabled"> <Spinner/></button>
                :
                    canPay 
                    ?
                        <button  className="btn-primary" onClick={()=> createPayment()}>
                            <p> PAGAR (${totalPrice}) </p>
                        </button>
                    :
                        isPaid
                        ?
                            <button  className="btn-primary pago-ok">
                                <p>¡PAGO RECIBIDO!</p>
                            </button>
                        :
                            <button  className="btn-primary disabled">
                                <p>PAGAR (${totalPrice}) </p>
                            </button>
            }
        </>
        
    )
}

export default MercadoPagoBricks