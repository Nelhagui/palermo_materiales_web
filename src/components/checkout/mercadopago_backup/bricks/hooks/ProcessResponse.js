const ProcessResponse = (status_detail) => {
    let msj = '';
    switch (status_detail) 
    {
        case 'Accredited':
             msj = "Pago acreditado";
        break;
        case 'pending_contingency':
             msj = "El pago está siendo procesado";
        break;
        case 'pending_review_manual':
             msj = "El pago se encuentra en revisión para determinar su aprobación o rechazo";
        break;
        case 'cc_rejected_bad_filled_date':
             msj = "Fecha de caducidad incorrecta";
        break;
        case 'cc_rejected_bad_filled_other':
             msj = "Datos de tarjeta incorrectos";
        break;
        case 'cc_rejected_bad_filled_security_code':
             msj = "CVV incorrecto";
        break;
        case 'cc_rejected_blacklist':
             msj = "La tarjeta está en una lista negra por robo/denuncia/fraude";
        break;
        case 'cc_rejected_call_for_authorize':
             msj = "El medio de pago requiere autorización previa del monto de la operación";
        break;
        case 'cc_rejected_card_disabled':
             msj = "La tarjeta está inactiva";
        break;
        case 'cc_rejected_duplicated_payment':
             msj = "Transaccion duplicada.";
        break;
        case 'cc_rejected_high_risk':
             msj = "Rechazo por Prevención de Fraude.";
        break;
        case 'cc_rejected_insufficient_amount':
             msj = "Cantidad insuficiente.";
        break;
        case 'cc_rejected_invalid_installments':
             msj = "Número de cuotas no válido";
        break;
        case 'cc_rejected_max_attempts':
             msj = "Se ha superado el número máximo de intentos";
        break;
        case 'cc_rejected_other_reason':
             msj = "Vuelva a intentarlo por favor";
        break;
    }
    return msj;
}

export default ProcessResponse