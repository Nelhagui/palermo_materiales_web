import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DetailIcon from "../assets/img/carrito_detalle.png";
import DataIcon from "../assets/img/carrito_datos.png";
import PaymentIcon from "../assets/img/FormDePago_negro.png";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Datos = () => {
  const [logged, setLogged] = useState(null);
  const [user, setUser] = useState([]);
  const [password, setPassword] = useState([]);
  const [credentials, setCredentials] = useState([]);

  let navigate = useNavigate()

  const loginPost = () => {
    axios
      .post(
        "https://test.api.palermomateriales.com.ar/api/auth/login",
        credentials
      )
      .then((response) => setLogged(response.data.token));
      if (logged) {
         navigate('/checkout/payment')
      }
  };

  useEffect(() => {
    setCredentials({
      email: user,
      password: password,
    });
    console.log(credentials, "USERINFO");
  }, [user, password]);

  return (
    <div className="wrapper">
      <div className="stepper-checkout p-5">
        <div>
          <img src={DetailIcon} alt="icon" />
          <p>Detalle</p>
        </div>
        <div className="active">
          <img src={DataIcon} alt="icon" />
          <p>Datos</p>
        </div>
        <div>
          <img style={{ height: "30px" }} src={PaymentIcon} alt="icon" />
          <p>Pago</p>
        </div>
      </div>
      <div className="log-window">
        <div className="login-container col-4 px-5 pb-5 mx-5 card">
          <div
            className="login-title h1 my-5 fw-bold"
            style={{ color: "#FF9817" }}
          >
            Iniciar sesion
          </div>
          <div className="login-form">
            <Form className="row">
              <FormGroup className="col-12">
                <Label for="name">Ingresa tu email</Label>
                <Input
                  onChange={(e) => setUser(e.target.value)}
                  style={{ height: "3em" }}
                  type="email"
                  name="name"
                  id="name"
                />
              </FormGroup>
              <FormGroup className="col-12">
                <Label for="email">Ingresa tu contraseña</Label>
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ height: "3em" }}
                  type="password"
                  name="password"
                  id="password"
                />
              </FormGroup>

              <Button
                onClick={() => loginPost()}
                className="btn-primary mx-auto mt-5"
              >
                Ingresar
              </Button>
              <p className="text-center mt-5">Olvidé mi contraseña</p>
            </Form>
          </div>
        </div>
        <div className="login-container col-6 px-5  mx-5 card">
          <div
            className="login-title h1 my-5 fw-bold"
            style={{ color: "#FF9817" }}
          >
            Registrarme
          </div>
          <div className="login-form">
            <Form className="row">
              <FormGroup className="col-6">
                <Label for="name">Ingresa tu nombre y apellido</Label>
                <Input
                  style={{ height: "3em" }}
                  type="name"
                  name="name"
                  id="name"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="email">Ingresa tu telefono/celular</Label>
                <Input
                  style={{ height: "3em" }}
                  type="email"
                  name="email"
                  id="email"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="name">Ingresa tu email</Label>
                <Input
                  style={{ height: "3em" }}
                  type="name"
                  name="name"
                  id="name"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="email">Ingresa tu contraseña</Label>
                <Input
                  style={{ height: "3em" }}
                  type="email"
                  name="email"
                  id="email"
                />
              </FormGroup>

              <Button className="btn-secondary mx-auto mt-5">
                Registrarse
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datos;
