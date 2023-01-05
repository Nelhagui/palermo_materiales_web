const mercadopago = require("mercadopago");
require("dotenv").config();

mercadopago.configure({
    access_token: "TEST-705872888102554-010318-73382fae318064d76f99e06a743ff654-700584",
});

module.exports = {
    mercadopago
}