import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';

const ValidarRegistro = () => {
    const [validando, setValidando] = useState(true)
    const [respuestaOk, setRespuestaOk] = useState(false)
    let {token} = useParams();
    useEffect(() => {
        sendPeticion();
    }, [token])

    const sendPeticion = () => {
        var config = {
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/user/valida_token?token=${token}`,
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            setValidando(false)
            setRespuestaOk(true);
          })
          .catch(function (error) {
            setValidando(false)
            setRespuestaOk(false);
          })
    }
    
    return (
        <div className="container-fluid wrapper">
            <div className='row mt-5 cont-validate'>
                {
                    validando 
                    ? <><Spinner />&nbsp; Validando... </>
                    : 
                        respuestaOk 
                        ? <p className='valida-ok'>¡Correo validado satisfactoriamente!</p> 
                        : <p className='valida-fallo'> Error al validar el link. Intente nuevamente.</p>
                }
            </div> 
        </div>
    )
}

export default ValidarRegistro