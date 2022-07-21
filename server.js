import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyDWZMC2v24i5q8OWUogYcUmkt2F6d19W2U",
    authDomain: "eventwatcher-1a305.firebaseapp.com",
    projectId: "eventwatcher-1a305",
    storageBucket: "eventwatcher-1a305.appspot.com",
    messagingSenderId: "998875469542",
    appId: "1:998875469542:web:74241180a3b6ae3467cd27",
    measurementId: "G-2B5XZ1NJWW"
};
const allowCors = fn => async(req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    return await fn(req, res)
}
const db = initializeApp(firebaseConfig);
const bodyParser = require('body-parser');

module.exports = allowCors(async(req, res) => {
    res.send(req.body);
})