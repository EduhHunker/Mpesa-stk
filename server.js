const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const consumerKey = "ERkqnycHkHAhBEGSnJLYYZdZVVZZj9GQn75faJS9bqhW25pA";
const consumerSecret = "MHnGXDwv6szWXFjXM0I8ALPQEMvnZACcZHDf1F95kaW6xAvmwrBmlFrv4x2bAVUT";
const shortCode = "174379";
const passkey = "l7YkN12fWfX8MbdXqPUA0EmBPlQe6tWk";

const getAccessToken = async () => {
    const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
    const encodedCredentials = new Buffer.from(consumerKey + ":" + consumerSecret).toString('base64');
    const headers = {
        'Authorization': "Basic " + encodedCredentials,
        'Content-Type': 'application/json'
    };
    const response = await axios.get(url, { headers });
    return response.data.access_token;
};

const sendStkPush = async () => {
    const token = await getAccessToken();
    const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, '').slice(0, 14);
    const stk_password = new Buffer.from(shortCode + passkey + timestamp).toString("base64");

    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
    const headers = { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' };
    const requestBody = {
        BusinessShortCode: shortCode,
        Password: stk_password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: "10",
        PartyA: "254729389423",
        PartyB: shortCode,
        PhoneNumber: "254729389423",
        AccountReference: "account",
        TransactionDesc: "test",
        CallBackURL: "https://mpesastk-e28452b2a3a3.herokuapp.com/mpesa/callback"
    };

    const response = await axios.post(url, requestBody, { headers });
    console.log('STK Push Response:', response.data);
};

app.post('/mpesa/callback', (req, res) => {
    console.log('Callback received:', JSON.stringify(req.body, null, 2));
    res.status(200).send({ ResultCode: 0, ResultDesc: "Accepted" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on https://mpesastk-e28452b2a3a3.herokuapp.com`);
});

sendStkPush();