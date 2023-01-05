import React from 'react'

const PaymentMethods = ({setSelectedMethod, nextStep, selectedMethod }) => {
    
    
  return (
    <div className='cont-radios'>
        <label htmlFor="email" className='radio-payment' onClick={()=> setSelectedMethod('email')}>
            <input type="radio" name="method" value="email" id="email" className='input-check' />
            Coordinar por email
        </label>
        <label htmlFor="mp" className='radio-payment mp' onClick={()=> setSelectedMethod('mp')}>
            <input type="radio" name="method" value="mp" id="mp" className='input-check' />
            Abonar con mercadopago
        </label>
        <div className='cont-btn-action-payment'>
            <div className={selectedMethod !== '' ? "btn-primary" : "btn-primary disabled"} onClick={() => nextStep()}>
                <p> CONTINUAR</p>
            </div>
        </div>
    </div>
  )
}

export default PaymentMethods