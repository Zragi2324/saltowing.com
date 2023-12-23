const express = require('express');

const app = express();


const PORT = 3000;


app.litsten(PORT, ()=>{

    console.log(`Listening on Port ${PORT}`);
})