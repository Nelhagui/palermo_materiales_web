import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';

const ValidaRecuperarPass = () => {
    const [tokenGet, setTokenGet] = useState(false)
    const [pass, setPass] = useState('')
    const [passRepeat, setPassRepeat] = useState('')
    const [sendingFetch, setSendingFetch] = useState(false)
    const [msj, setMsj] = useState(null)
    let {token} = useParams();
    useEffect(() => {
        setTokenGet(token)
    }, [token])

    const sendPeticion = () => {
        setMsj(null);
        setSendingFetch(true)
        let myHeaders = new Headers();
            myHeaders.append("Accept", "application/json");
            myHeaders.append("Content-Type", "application/json");

            let requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: JSON.stringify({"password": pass, "repeat_password": passRepeat, "token": tokenGet }),
              redirect: 'follow'
            };

            fetch(`${process.env.REACT_APP_API_URL}/user/valida_cambio_pass`, requestOptions)
              .then(response => response.json())
              .then(result => {
                console.log(result);
                setMsj(result);
                setSendingFetch(false)
              })
              .catch(error => {
                console.log('error', error)
                setSendingFetch(false)
            });
              
    }
    
    return (
<div className="container-fluid wrapper">
        <div className="row cont-login-register">
            <div className="col-12 col-lg-5 cont-login" style={{ margin: "auto", marginTop: '10%', marginBottom: '100px'}}>
                <div>
                    <div className="login-title fw-bold" style={{minWidth: 'max-content'}} >
                        Cambiar contraseña
                    </div>
                    <form action="" className="form-login">
                        <div className='col-12'>
                            <div className='inputs-cols-2'>
                                <label className="pago-text" htmlFor="pass">Nueva contraseña</label>
                                <input type="text" name='pass' onChange={(e) => {setPass(e.target.value); setMsj(null)}} autoComplete="off" disabled={sendingFetch}/>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='inputs-cols-2'>
                                <label className="pago-text" htmlFor="pass">Repetir contraseña</label>
                                <input type="text" name='pass' onChange={(e) => {setPassRepeat(e.target.value); setMsj(null)}} autoComplete="off" disabled={sendingFetch}/>
                            </div>
                        </div>
                        <div className='col-12 d-flex justify-content-center'>
                            <button className={sendingFetch ? "btn-primary disabled" : "btn-primary"} type="button" onClick={sendingFetch ? null : () => sendPeticion()}>
                                { sendingFetch
                                    ?
                                    <Spinner/>
                                    :
                                    <p>CONTINUAR</p>
                                }
                            </button>
                        </div>
                        <div className='col-12 d-flex justify-content-center' style={{color: 'black'}}>
                            <p className="pago-text">{msj}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ValidaRecuperarPass