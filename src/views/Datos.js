import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DetailIcon from "../assets/img/carrito_detalle.png";
import DataIcon from "../assets/img/carrito_datos.png";
import PaymentIcon from "../assets/img/FormDePago_negro.png";
import Spinner from "../components/Spinner.js";

const Datos = () => {
  const [logged, setLogged] = useState(null);

  const [user, setUser] = useState([]);
  const [password, setPassword] = useState([]);

  const [nameRegister, setNameRegister] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [passwordConfirmationRegister, setPasswordConfirmationRegister] = useState('');
  const [phoneRegister, setPhoneRegister] = useState('');

  const [credentials, setCredentials] = useState([]);
  const [credentialsRegister, setCredentialsRegister] = useState([]);
  const [msjError, setMsjError] = useState('');
  const [msjErrorRegister, setMsjErrorRegister] = useState('');
  const [sendingLoginFetch, setSendingLoginFetch] = useState(false)
  const [sendingRegisterFetch, setSendingRegisterFetch] = useState(false)

  let navigate = useNavigate()

  const loginPost = () => {
    setSendingLoginFetch(true);
    setMsjError('')
    axios.post( "https://test.api.palermomateriales.com.ar/api/auth/login", credentials )
        .then((response) => {
            setLogged(response.data)
            setSendingLoginFetch(false) 
    })
    .catch(function (error) {
        setMsjError('Email o Contraseña errónea')
        setSendingLoginFetch(false)
    });
  };

  const registerPost = () => {
    setSendingRegisterFetch(true);
    setMsjErrorRegister('')

    let config = {
        method: 'post',
        url: `https://test.api.palermomateriales.com.ar/api/user/crear?nombre=${nameRegister}&password=${passwordRegister}&password_confirmation=${passwordConfirmationRegister}&email=${emailRegister}`,
        headers: { }
    };

    axios(config)
    .then(function (response) {
        if(response.data.aviso) {
            setLogged(response.data)
            setSendingRegisterFetch(false)
        }
        else {
            if(response.data.errors.length > 0){
                setMsjErrorRegister(response.data.errors[0]);
                setSendingRegisterFetch(false) 
            }
        }
    })
    .catch(function (error) {
        setMsjErrorRegister('Error en uno de los campos.')
        setSendingRegisterFetch(false)
    });
  };

  useEffect(() => {
    if (logged) {
        localStorage.setItem('user', JSON.stringify(logged))
        navigate('/checkout/detail')
    }
  }, [logged]);

  useEffect(() => {
    setCredentials({
      email: user,
      password: password,
    });
  }, [user, password]);

  return (
    <div className="container-fluid wrapper">
        <div className="stepper-checkout">
            <div>
                <img src={DetailIcon} style={{ fill: '#FF9817' }} alt="icon" />
                <p className="pago-text">Detalle</p>
            </div>
            <div className="active">
                <img src={DataIcon} alt="icon" />
                <p className="pago-text">Datos</p>
            </div>
            <div>
                <img style={{ height: '30px' }} src={PaymentIcon} alt="icon" />
                <p className="pago-text">Pago</p>
            </div>
        </div>
        <div className="row cont-login-register">
            <div className="col-12 col-lg-5 cont-login">
                <div>
                    <div className="login-title fw-bold" >
                        Iniciar sesion
                    </div>
                    <form action="" className="form-login">
                        <div className='col-12'>
                            <div className='inputs-cols-2'>
                                <label className="pago-text" htmlFor="email">Ingresa tu email</label>
                                <input type="text" name='email' onChange={(e) => setUser(e.target.value)}/>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='inputs-cols-2'>
                                <label className="pago-text" htmlFor="pass">Ingresa tu contraseña</label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" name='pass'/>
                            </div>
                        </div>
                        <div className='col-12 d-flex justify-content-center'>
                            <button className={sendingLoginFetch || sendingRegisterFetch ? "btn-primary disabled" : "btn-primary"} type="button" onClick={sendingLoginFetch || sendingRegisterFetch ? null : () => loginPost()}>
                                { sendingLoginFetch
                                    ?
                                    <Spinner/>
                                    :
                                    <p>CONTINUAR</p>
                                }
                            </button>
                        </div>
                        <div className='col-12 d-flex justify-content-center' style={{color: 'red'}}>
                            <p className="pago-text">{msjError}</p>
                        </div>
                        {/* <div className="col-12 d-flex justify-content-center">
                            <a href="#" className="pago-text">Olvidé mi contraseña</a>
                        </div> */}
                    </form>
                </div>
            </div>
            <div className="col-12 col-lg-7 cont-register">
                <div>
                    <div className="register-title fw-bold pago-text" >
                        Registrarme
                    </div>
                    <form action="" className="form-register">
                        <div className="row">
                            <div className='col-12 col-lg-6'>
                                <div className='inputs-cols-2'>
                                    <label className="pago-text" htmlFor="nombre">Ingresa tu nombre y apellido</label>
                                    <input type="text" name='nombre' onChange={(e) => setNameRegister(e.target.value)} />
                                </div>
                            </div>
                            <div className='col-12 col-lg-6'>
                                <div className='inputs-cols-2'>
                                    <label className="pago-text" htmlFor="telefono">Ingresa tu telefono/celular</label>
                                    <input type="text" name='telefono' onChange={(e) => setPhoneRegister(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='inputs-cols-2'>
                                <label className="pago-text" htmlFor="email">Ingresa tu email</label>
                                <input type="text" name='email' onChange={(e) => setEmailRegister(e.target.value)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-12 col-lg-6'>
                                <div className='inputs-cols-2'>
                                    <label className="pago-text" htmlFor="pass">Ingresa tu contraseña</label>
                                    <input type="password" name='pass' onChange={(e) => setPasswordRegister(e.target.value)}/>
                                </div>
                            </div>
                            <div className='col-12 col-lg-6'>
                                <div className='inputs-cols-2'>
                                    <label className="pago-text" htmlFor="pass_confirmation">Repetir contraseña</label>
                                    <input type="password" name='pass_confirmation' onChange={(e) => setPasswordConfirmationRegister(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 d-flex justify-content-center'>
                            <button className={sendingLoginFetch || sendingRegisterFetch ? "btn-secondary disabled" : "btn-secondary"} type="button" onClick={sendingLoginFetch || sendingRegisterFetch ? null : () => registerPost()}>
                                { sendingRegisterFetch
                                    ?
                                    <Spinner/>
                                    :
                                    <p className="pago-text">REGISTRARSE</p>
                                }
                            </button>
                        </div>
                        <div className='col-12 d-flex justify-content-center' style={{color: 'red'}}>
                            <p className="pago-text">{msjErrorRegister}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

      {/* <div className="log-window">
        <div className="login-container col-4 px-5 pb-5 mx-5 card">
          <div className="login-title h1 my-5 fw-bold pago-text" style={{ color: "#FF9817" }} >
            Iniciar sesion
          </div>
          <div className="login-form">
            <Form className="row">
              <FormGroup className="col-12">
                <Label for="name">Ingresa tu email</Label>
                <Input
                  
                  style={{ height: "3em" }}
                  type="email"
                  name="name"
                />
              </FormGroup>
                <FormGroup className="col-12">
                    <Label for="email">Ingresa tu contraseña</Label>
                    <Input  style={{ height: "3em" }} type="password" name="password" /> 
                </FormGroup>
                <Button  className="btn-primary mx-auto mt-5" >
                    Ingresar
                </Button>
              <p className="text-center mt-5 pago-text">Olvidé mi contraseña</p>
            </Form>
          </div>
        </div>
        <div className="login-container col-6 px-5  mx-5 card">
            <div className="login-title h1 my-5 fw-bold pago-text" style={{ color: "#FF9817" }}> 
                Registrarme 
            </div>
            <div className="login-form">
                <Form className="row">
                  <FormGroup className="col-6">
                    <Label for="name" className="pago-text">Ingresa tu nombre y apellido</Label>
                    <Input
                      style={{ height: "3em" }}
                      type="name"
                      name="name"
                    />
                  </FormGroup>
                  <FormGroup className="col-6">
                    <Label for="email" className="pago-text">Ingresa tu telefono/celular</Label>
                    <Input
                      style={{ height: "3em" }}
                      type="email"
                      name="email"
                    />
                  </FormGroup>
                  <FormGroup className="col-6">
                    <Label for="name" className="pago-text">Ingresa tu email</Label>
                    <Input
                      style={{ height: "3em" }}
                      type="name"
                      name="name"
                    />
                  </FormGroup>
                  <FormGroup className="col-6">
                    <Label for="email" className="pago-text">Ingresa tu contraseña</Label>
                    <Input
                      style={{ height: "3em" }}
                      type="email"
                      name="email"
                    />
                  </FormGroup>

                  <Button className="btn-secondary mx-auto mt-5 pago-text">
                    Registrarse
                  </Button>
                </Form>
            </div>
        </div>
      </div> */}
    </div>
  );
};

export default Datos;
