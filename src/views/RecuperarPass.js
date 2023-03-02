import React, {useState} from 'react'
import Spinner from '../components/Spinner.js'

const RecuperarPass = () => {
    const [email, setEmail] = useState('')
    const [sendingFetch, setSendingFetch] = useState(false)
    const [msj, setMsj] = useState(null)
    const sendFetchPass = () => {
        setMsj(null)
        setSendingFetch(true)

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
          method: 'PATCH',
          headers: myHeaders,
          body: JSON.stringify({"email": email }),
          redirect: 'follow'
        };

        fetch(`${process.env.REACT_APP_API_URL}/user/cambiarpassword`, requestOptions)
          .then(response => response.text())
          .then(result => {
                setMsj('Revise su correo para finalizar el proceso')
                setSendingFetch(false);
            })
          .catch(error => console.log('error', error));
    }
return (
<div className="container-fluid wrapper">
        <div className="row cont-login-register">
            <div className="col-12 col-lg-5 cont-login" style={{ margin: "auto", marginTop: '10%', marginBottom: '100px'}}>
                <div>
                    <div className="login-title fw-bold" style={{minWidth: 'max-content'}} >
                        Recuperar contraseña
                    </div>
                    <form action="" className="form-login">
                        <div className='col-12'>
                            <div className='inputs-cols-2'>
                                <label className="pago-text" htmlFor="email">Ingresa tu email</label>
                                <input type="text" name='email' onChange={(e) => {setEmail(e.target.value); setMsj(null)}} autoComplete="off" disabled={sendingFetch}/>
                            </div>
                        </div>
                        <div className='col-12 d-flex justify-content-center'>
                            <button className={sendingFetch ? "btn-primary disabled" : "btn-primary"} type="button" onClick={sendingFetch ? null : () => sendFetchPass()}>
                                { sendingFetch
                                    ?
                                    <Spinner/>
                                    :
                                    <p>CONTINUAR</p>
                                }
                            </button>
                        </div>
                        <div className='col-12 d-flex justify-content-center' style={{color: 'green'}}>
                            <p className="pago-text">{msj}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
)
}

export default RecuperarPass