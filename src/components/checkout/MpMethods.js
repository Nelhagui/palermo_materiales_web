import React, {useState} from 'react'
import MercadoPagoBricks from "./mercadopago/bricks/MercadoPagoBricks.js";


const MpMethods = ({previousStep}) => {
    const [isDisabledBtnPreviousStep, setIsDisabledBtnPreviousStep] = useState(false)

    return (
        <>
            <MercadoPagoBricks setIsDisabledBtnPreviousStep={setIsDisabledBtnPreviousStep}></MercadoPagoBricks>
            <button className={isDisabledBtnPreviousStep ? "btn-secondary disabled" : "btn-secondary"} onClick={ isDisabledBtnPreviousStep ? null : () => previousStep()}>
                <p> REGRESAR </p>
            </button>
        </>
        
    );    
}

export default MpMethods
